const userRouter = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../model/user");
require("express-async-errors");

userRouter.post("/", async (request, response) => {
	const { firstname, lastname, username, email, password } = request.body;
	const saltRound = 10;
	const passwordHash = await bcrypt.hash(password, saltRound);
	const newUser = await new User({ firstname, lastname, username, email, passwordHash });
	await newUser.save();
	response.status(201).json(newUser);
});

userRouter.get("/", async (request, response) => {
	const users = await User.find({});
	response.json(users);
});

module.exports = userRouter;
