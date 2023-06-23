const mongoose = require("mongoose");

const studentDetails = new mongoose.Schema({
  name: String,
  uid: String,
  mobileNo: String,
  gurdianNo: String,
  hostelDetails: {
    hostelName: String,
    roomNo: Number,
  },
});

module.exports = mongoose.model("students", studentDetails);
