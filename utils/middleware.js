///////////////////////////////////
// IMPORT OUR DEPS
///////////////////////////////////
require("dotenv").config(); // load .env variables
const express = require("express"); // our web framework
const morgan = require("morgan"); // our logger
const methodOverride = require("method-override"); // override forms
const fruitController = require("../controllers/fruit");
const userController = require("../controllers/user");
const session = require("express-session");
const MongoStore = require("connect-mongo");

function registerGlobalMiddleware(app) {
  ////////////////////////////////////////////////////
  // Register our Middleware
  ////////////////////////////////////////////////////
  //normal middleware
  app.use(morgan("dev")); //logger
  app.use(methodOverride("_method")); // override form submissions
  app.use(express.urlencoded({ extended: true })); // parse urlencoded bodies
  app.use(express.static("public")); // serve files from public folder
  app.use(
    session({
      secret: process.env.SECRET,
      store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
      saveUninitialized: true,
      resave: false,
    })
  );

  // routers
  app.use("/fruits", fruitController);
  app.use("/user", userController);
}

module.exports = registerGlobalMiddleware;
