const mongoose = require('mongoose');
mongoose.Promise = Promise;
const db = mongoose.connection;

// db.on('open', () => { console.log('Successful connection to MongoDB')});
mongoose.connect(process.env.MONGO_URI, { useMongoClient: true });

module.exports = mongoose;
