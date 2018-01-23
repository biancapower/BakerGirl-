const mongoose = require('./base');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const cakeSchema = Schema({
  layers: String, 
  tiers: String, 
  flavours: [String], 
  fillings: [String], 
  style: String, 
  custName: String, 
  contactNumber: String, 
  email: String, 
  eventDate: String, 
  eventType: String, 
  servings: Number, 
  delivery: Boolean, 
  deliveryAddress: String, 
  referral: String
});

const Cake = mongoose.models.Cake || mongoose.model('Cake', cakeSchema);

module.exports = Cake
