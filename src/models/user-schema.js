// Require Mongoose
var mongoose = require('mongoose');

// Define a schema
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
   	firstname: String,
	lastname: String,
	username: String,
    password_hash: String,

});
 
// Export function to create "UserModel" model class
export default mongoose.model('UserModel', UserSchema);

