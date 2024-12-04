const mongoose = require('mongoose');

const benhNhanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model('BenhNhan', benhNhanSchema);
