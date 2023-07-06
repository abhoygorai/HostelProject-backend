const express = require("express");
const router = express.Router();

const getStudentDetails = require("./getStudentDetails")
const generatePass = require("./generatePass")
const deletePass = require("./deletePass")

router.post("/getStudentDetails", getStudentDetails)
router.post("/generatePass", generatePass)
router.delete("/deletePass", deletePass)

module.exports = router;
