const mongoose = require("mongoose");

const { Schema } = mongoose;

const imageSchema = new Schema({
	url: { type: String, required: true },
	label: { type: String, required: true },
});

imageSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		// eslint-disable-next-line
		returnedObject.id = returnedObject._id.toString();
		// eslint-disable-next-line
		delete returnedObject._id;
		// eslint-disable-next-line
		delete returnedObject.__v;
	},
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
