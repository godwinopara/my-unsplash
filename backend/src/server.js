const express = require("express");
const mongoose = require("mongoose");
const logger = require("./utils/logger")
const dotenv = require("dotenv").config()


const app = express();

// CONNECTION TO MONGODB

mongoose
    .connect(process.env.MONGODB_URL)
    .then(result => {
        logger.info("connect to MongoDB")
    })
    .catch(error){
        logger.error(error)
}
    

// ROUTERS

app.use("/api/images")




const PORT = 5000;

app.listen(PORT, () => console.log(`running on port ${PORT}`));
