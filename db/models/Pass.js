const mongoose = require("mongoose");
const profile = require("./Profile")

const passSchema = new mongoose.Schema({
  name: String,
  uid: String,
  mobileNo: String,
  guardianNo: String,
  hostelDetails: {
    hostelName: String,
    roomNo: Number,
  },
  category: String,
  passId: String,
  purpose: String,
  place: String,
  outTime: String,
  inTime: String,
  warden: { type: mongoose.Schema.Types.ObjectId, ref: profile },
  createdOn: Date,
  verrified: Boolean,
});

module.exports = mongoose.model("generatedpass", passSchema);
