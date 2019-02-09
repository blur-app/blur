// Import the mongoose module
var mongoose = require('mongoose');

// Set up default mongoose connection
var mongoDB = 'mongodb://blur-admin:arrogant8sadist@blur-shard-00-00-hsogj.gcp.mongodb.net:27017,blur-shard-00-01-hsogj.gcp.mongodb.net:27017,blur-shard-00-02-hsogj.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Blur-shard-0&authSource=admin&retryWrites=true/BlurDB';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
// Get the default connection
var db = mongoose.connection;

// Bing connectino to error event (to get norification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
