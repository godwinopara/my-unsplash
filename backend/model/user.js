const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const { Schema } = mongoose;

const userSchema = new Schema({
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	passwordHash: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

module.exports = User;
