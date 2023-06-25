const mongoose = require("mongoose");

const studentDetails = new mongoose.Schema({
  name: String,
  uid: String,
  mobileNo: String,
  guardianNo: String,
  hostelDetails: {
    hostelName: String,
    roomNo: Number,
  },
});

module.exports = mongoose.model("students", studentDetails);
