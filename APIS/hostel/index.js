const express = require("express");
const router = express.Router();

const getStudentDetails = require("./getStudentDetails")
const generatePass = require("./generatePass")

router.post("/getStudentDetails", getStudentDetails)
router.post("/generatePass", generatePass)

module.exports = router;
