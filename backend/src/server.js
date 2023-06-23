const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("./utils/logger");
const imageController = require("../controller/imageController");
// const middleware = require("./utils/middleware");

dotenv.config();

const app = express();

// MIDDLEWARES

app.use(express.json());
// app.use(middleware.requestLogger());

// CONNECTION TO MONGODB
mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		logger.info("connect to MongoDB");
	})
	.catch((error) => {
		logger.error(error);
	});

// ROUTERS
app.use("/api/images", imageController);

// const { PORT } = process.env.PORT;
// MIDDLEWARES
const PORT = 5000;

app.listen(PORT, () => console.log(`running on port ${PORT}`));
