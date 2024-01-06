const express = require("express")


const router = express.Router()


/////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////
router.get("/", (req, res) => {
    res.send("your server is running... better catch it");
  });

module.exports = router