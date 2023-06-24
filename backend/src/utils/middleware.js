const logger = require("./logger");

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
		response.status(400).json({ error: error.message });
	} else if (error.name === "TokenExpiredError") {
		response.status(401).json({ error: error.message });
	}

	next(error);
};

module.exports = { requestLogger, errorHandler, unknownEndpoint };
