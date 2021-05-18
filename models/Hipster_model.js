// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Hipster Schema
const placeSchema = new Schema(
  {
    name: String,
    img: String,
    description: String,
  },
  { timestamps: true }
);

// Create our Hipster Model 
const Hipster = model("Hipster", placeSchema);

// Export our Model Object
module.exports = Hipster;