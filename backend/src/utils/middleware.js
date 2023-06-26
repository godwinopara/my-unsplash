const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const logger = require("./logger");

dotenv.config();

const requestLogger = (request, response, next) => {
	logger.info("Method:", request.method);
	logger.info("Path:", request.path);
	logger.info("Body:", request.body);
	logger.info("---------------------");
	next();
};

const unknownEndpoint = (request, response) => {
	response.status(404).json({ error: "Unknown Endpoint" });
};

const errorHandler = (error, request, response, next) => {
	logger.error(error.message);

	if (error.name === "ValidationError") {
		response.status(400).json({ error: error.message });
	} else if (error.name === "JsonWebTokenError") {
		response.status(400).json({ error: "unauthorized" });
	} else if (error.name === "TokenExpiredError") {
		response.status(401).json({ error: "session expired" });
	}

	next(error);
};

const getToken = (request, response, next) => {
	const authorization = request.get("Authorization");
	if (authorization && authorization.startsWith("Bearer ")) {
		request.token = authorization.replace("Bearer ", "");
	} else {
		request.token = null;
	}
	next();
};

const verifyToken = (request, response, next) => {
	const token = jwt.verify(request.token, process.env.SECRET);
	if (token) {
		request.user = token;
	} else {
		request.user = null;
	}
	next();
};

module.exports = { requestLogger, getToken, errorHandler, verifyToken, unknownEndpoint };
