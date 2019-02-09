// File: ./models/post-model.js

// Require Mongoose
var mongoose = require('mongoose');

// Define a schema
var Schema = mongoose.Schema;

var PostSchema = new Schema ({
	user_id: Schema.Types.ObjectID,
	content_id: Scheme.Types.ObjectID,
	// not timestamp type, stored as 64-bit int
	timestamp: long

});

// Export function to create "PostModel" model class
module.exports = mongoose.model('PostModel', PostSchema);
