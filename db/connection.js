// LOAD ENVIRONMENTAL VARIABLES
require("dotenv").config();

// IMPORT DEPENDENCIES
const mongoose = require("mongoose");

// PULL OUT ENVIRONMENTAL VARIABLE FROM PROCESS.ENV OBJECT
const MONGODB_URI = process.env.MONGODB_URI;

// Optional Configuration Object to Remove Mongo Deprecation Warnings
// const config = { useUnifiedTopology: true, useNewUrlParser: true };
const config = {
    useUnifiedTopology:true, 
    useNewUrlParser: true, 
    useFindAndModify: false, 
}

//Establish Connection to Database
mongoose.connect(MONGODB_URI, config);

// Create Database Connection message for Open, Close, Error
mongoose.connection
  .on("open", () => console.log("MONGO CONNECTION IS OPEN guy!"))
  .on("close", () => console.log("MONGO CONNECTION IS CLOSED buddy!"))
  .on("error", (error) =>
    console.log("MONGO CONNECTION ERROR \n***************\n", error)
  );

  module.exports = mongoose