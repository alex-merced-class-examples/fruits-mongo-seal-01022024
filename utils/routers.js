const fruitController = require("../controllers/fruit");
const userController = require("../controllers/user");
const homeController = require("../controllers/home")

function registerRouters(app){

  // routers
  app.use("/fruits", fruitController);
  app.use("/user", userController);
  app.use(homeController)
}

module.exports = registerRouters