const mongoose = require('mongoose');

const donThuocSchema = new mongoose.Schema({
  benhAnId: { type: mongoose.Schema.Types.ObjectId, ref: 'BenhAn', required: true },
  thuocIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thuoc', required: true }], // Danh sách thuốc
  instructions: { type: String }, // Hướng dẫn sử dụng
  createdDate: { type: Date, default: Date.now }, // Ngày lập đơn thuốc
});

module.exports = mongoose.model('DonThuoc', donThuocSchema);
