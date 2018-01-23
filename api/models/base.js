const mongoose = require('mongoose');
mongoose.Promise = Promise;
const db = mongoose.connection;

mongoose.connect(process.env.MONGO_URI, { useMongoClient: true });

module.exports = mongoose;
