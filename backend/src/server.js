const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("./utils/logger");
const imageController = require("../controller/imageController");
const authController = require("../controller/authController");
const middleware = require("./utils/middleware");

dotenv.config();

const app = express();

// MIDDLEWARES

app.use(express.json());
app.use(middleware.requestLogger);

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
app.use("/api/users", authController);

// ERROR HANDLING MIDDLEWARES

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

// eslint-disable-next-line
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`running on port ${PORT}`));
