const mongoose = require('mongoose');

const benhAnSchema = new mongoose.Schema({
  benhNhanId: { type: mongoose.Schema.Types.ObjectId, ref: 'BenhNhan', required: true },
  bacSiId: { type: mongoose.Schema.Types.ObjectId, ref: 'BacSi', required: true },
  details: { type: String, required: true },
  diagnosisDate: { type: Date, default: Date.now },
  treatment: { type: String }, // Điều trị
  followUpDate: { type: Date }, // Ngày tái khám
});

module.exports = mongoose.model('BenhAn', benhAnSchema);
