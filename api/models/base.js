const mongoose = require('mongoose');
mongoose.Promise = Promise;
const db = mongoose.connection;

mongoose.connect('mongodb://admin:cakes@ds249757.mlab.com:49757/cakes-api', { useMongoClient: true });

module.exports = mongoose;
