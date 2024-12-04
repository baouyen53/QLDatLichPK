const mongoose = require('mongoose');

const lichHenSchema = new mongoose.Schema({
  benhNhanId: { type: mongoose.Schema.Types.ObjectId, ref: 'BenhNhan', required: true },
  bacSiId: { type: mongoose.Schema.Types.ObjectId, ref: 'BacSi', required: true },
  dichVuId: { type: mongoose.Schema.Types.ObjectId, ref: 'DichVu', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model('LichHen', lichHenSchema);
