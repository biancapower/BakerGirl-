const mongoose = require('mongoose');
mongoose.Promise = Promise;
const db = mongoose.connection;
console.log('mongourl', process.env.MONGO_URI)
// db.on('open', () => { console.log('Successful connection to MongoDB')});
mongoose.connect('mongodb://admin:cakes@ds249757.mlab.com:49757/cakes-api', { useMongoClient: true });

module.exports = mongoose;
