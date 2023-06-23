const express = require("express");
const router = express.Router();

const getGeneratedPass = require("./getGeneratedPass")

router.post("/getGeneratedPass", getGeneratedPass)

module.exports = router;
