//////////////////////////////////
// Import Deps and Connection
/////////////////////////////////
const mongoose = require("./connection")

/////////////////////////////////////////
// Create Our Fruits Model
/////////////////////////////////////////
// destructure Schema and model into their own variables
const { Schema, model } = mongoose;
// const Schema = mongoose.Schema
// const model = mongoose.model

// Schema - Shape of the Data
const fruitSchema = new Schema({
  name: String,
  color: String,
  readyToEat: Boolean,
  username: String,
});

// Model - object for interacting with the db
const Fruit = model("Fruit", fruitSchema);

//////////////////////////////////
// export the model
/////////////////////////////////
module.exports = Fruit