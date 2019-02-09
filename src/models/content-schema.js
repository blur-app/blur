// File: ./models/content-schema.js

// Require Mongoose
var mongoose = require('mongoose');

// Define a schema
var Schema = mongoose.Schema;

var ContentSchema = new Schema ({
    type: String,
    host: String,
 
});
 
// Export function to create "ContentModel" model class
module.exports = mongoose.model('ContentModel', ContentSchema);
