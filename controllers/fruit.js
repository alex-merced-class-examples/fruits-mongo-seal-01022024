//////////////////////////////////////
//Import Dependencies
///////////////////////////////////////
const express = require("express");
const fruitActions = require("../actions/fruits")

//////////////////////////////////////
// Create the Router
///////////////////////////////////////
const router = express.Router();

//Middleware
router.use((req, res, next) => {
  console.table(req.session);

  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/user/login");
  }

  
});

/////////////////////////////////////
// Routes
//////////////////////////////////////

router.get("/seed", fruitActions.seed);

// Index Route Get -> /fruits
router.get("/", fruitActions.index);

// New Route
router.get("/new", fruitActions.newRoute);

// Create Route (Post to /fruits)
router.post("/", fruitActions.create);

// Edit Route (Get to /fruits/:id/edit)
router.get("/:id/edit", fruitActions.edit);

// The Update Route (Put to /fruits/:id)
router.put("/:id", fruitActions.update);

// The Delete Route (delete to /fruits/:id)
router.delete("/:id", fruitActions.destroy);

// The Show Route (Get to /fruits/:id)
router.get("/:id", fruitActions.show);

/////////////////////////////////////
// Export the Router
//////////////////////////////////////
module.exports = router;
