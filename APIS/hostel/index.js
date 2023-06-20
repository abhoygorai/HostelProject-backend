const express = require("express");
const router = express.Router();

const getStudentDetails = require("./getStudentDetails")

router.post("/getStudentDetails", getStudentDetails)

module.exports = router;
