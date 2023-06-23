const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  eid: String,
  password: String,
  name: String,
  role: String,
});

module.exports = mongoose.model('profile', profileSchema);