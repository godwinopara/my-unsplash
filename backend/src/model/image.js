const mongoose = require("mongoose");

const { Schema } = mongoose;

const imageSchema = new Schema({
	url: { type: String, required: true },
	label: { type: String, required: true },
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
