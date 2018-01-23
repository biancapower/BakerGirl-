const mongoose = require('mongoose');
mongoose.Promise = Promise;
const db = mongoose.connection;

mongoose.connect('mongodb://localhost:/cakes', { useMongoClient: true });

module.exports = mongoose;
