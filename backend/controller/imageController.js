const imageRouter = require("express").Router();
const Image = require("../model/image");
require("express-async-errors");

// GET ALL IMAGES

imageRouter.get("/", async (request, response) => {
	const images = await Image.find({});
	return response.json({ images });
});

// ADD NEW IMAGES

imageRouter.post("/", async (request, response) => {
	const { url, label } = request.body;
	const image = await new Image({ url, label });
	image.save();
	response.status(201).json({ image });
});

module.exports = imageRouter;
