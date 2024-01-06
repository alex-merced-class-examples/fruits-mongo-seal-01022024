///////////////////////////////////
// IMPORT OUR DEPS
///////////////////////////////////
require("dotenv").config(); // load .env variables
const express = require("express"); // our web framework
const registerGlobalMiddleware = require("./utils/middleware");
const registerRouters = require("./utils/routers")

//////////////////////////////////////////////////
// Express App Object
/////////////////////////////////////////////////
const app = express();

// Register Middleware
registerGlobalMiddleware(app);

// RegisterRouters
registerRouters(app)

///////////////////////////////////////////////////////
// Server Listener
////////////////////////////////////////////////////////
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
