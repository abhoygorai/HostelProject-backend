const express = require("express");
const login = require("./login"); // Assuming loginHandler.js is located in the root directory

const router = express.Router();

router.post("/login", login);
router.get("/test", (req, res) => {
  console.log(req.body);
  console.log("check");
  res.json({
    message: "all good",
  });
});

module.exports = router;
