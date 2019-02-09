import UserModel from 'user-schema.js';

// Create an instance of model UserModel
var user0 = new UserModel({
	firstname: 'Bob',
	lastname: 'Smith',
	username: 'bsmith',
	password_hash: 'd2gd0woad' 

});

// Save the new model instance, passing a callback
user0.save(function (err) {
	if (err) return handleError(err);
	// saved
});
