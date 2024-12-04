const mongoose = require('mongoose');

const thuocSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dosage: { type: String, required: true }, // Liều dùng
  price: { type: Number, required: true }, // Giá thuốc
  manufacturer: { type: String }, // Nhà sản xuất (tuỳ chọn)
});

module.exports = mongoose.model('Thuoc', thuocSchema);
