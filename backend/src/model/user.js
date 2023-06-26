const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const { Schema } = mongoose;

const userSchema = new Schema({
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	passwordHash: { type: String, required: true },
	location: String,
	portfolio: String,
	bio: String,
});

userSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		// eslint-disable-next-line
		returnedObject.id = returnedObject._id.toString();
		// eslint-disable-next-line
		delete returnedObject._id;
		// eslint-disable-next-line
		delete returnedObject.__v;
	},
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

module.exports = User;
