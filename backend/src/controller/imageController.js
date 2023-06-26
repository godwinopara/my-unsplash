const imageRouter = require("express").Router();
const Image = require("../model/image");
const middleware = require("../utils/middleware");
require("express-async-errors");

// GET ALL IMAGES

imageRouter.get("/", async (request, response) => {
	const images = await Image.find({});
	return response.json({ images });
});

// ADD NEW IMAGES

imageRouter.post("/", middleware.verifyToken, async (request, response) => {
	const { url, label } = request.body;
	const image = await new Image({ url, label });
	await image.save();
	response.status(201).json({ image });
});

// DELETE IMAGE

imageRouter.delete("/:id", middleware.verifyToken, async (request, response) => {
	// eslint-disable-next-line
	const id = request.params.id;

	await Image.findByIdAndDelete(id);
	response.status(204).end();
});

module.exports = imageRouter;
