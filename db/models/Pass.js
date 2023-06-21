const mongoose = require("mongoose");

const passSchema = new mongoose.Schema({
  name: String,
  uid: String,
  mobileNo: String,
  gurdianNo: String,
  hostelDetails: {
    hostelName: String,
    roomNo: Number,
  },
  purpose: String,
  place: String,
  outTime: String,
  inTime: String,
  warden: { type: mongoose.Schema.Types.ObjectId, ref: 'Profiles' },
});

module.exports = mongoose.model("GeneratedPass", passSchema);
