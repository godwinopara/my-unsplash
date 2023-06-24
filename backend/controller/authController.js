const userRouter = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
require("express-async-errors");

// GET ALL USER ROUTE

userRouter.get("/", async (request, response) => {
	const users = await User.find({});
	response.json(users);
});

// ADD NEW USER ROUTE

userRouter.post("/", async (request, response) => {
	const { firstname, lastname, username, email, password } = request.body;
	const saltRound = 10;
	const passwordHash = await bcrypt.hash(password, saltRound);
	const newUser = await new User({ firstname, lastname, username, email, passwordHash });
	await newUser.save();
	response.status(201).json(newUser);
});

// LOGIN USER ROUTE

userRouter.post("/login", async (request, response) => {
	const { email, password } = request.body;

	const user = await User.findOne({ email });
	const passwordCheck = user === null ? false : await bcrypt.compare(password, user.passwordHash);

	if (!(user && passwordCheck)) {
		response.status(404).json({ error: "Invalid Username or Password" });
	}

	const userToken = {
		// eslint-disable-next-line
		id: user._id,
		username: user.username,
		email: user.email,
	};

	const token = jwt.sign(userToken, process.env.SECRET, { expiresIn: "1hr" });

	response.status(200).json({ token, username: user.username });
});

module.exports = userRouter;
