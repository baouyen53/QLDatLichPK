const mongoose = require('mongoose');

const thanhToanSchema = new mongoose.Schema({
  benhNhanId: { type: mongoose.Schema.Types.ObjectId, ref: 'BenhNhan', required: true },
  dichVuId: { type: mongoose.Schema.Types.ObjectId, ref: 'DichVu', required: true },
  amount: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'completed', 'failed'], 
    default: 'pending' 
  },
  paymentDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ThanhToan', thanhToanSchema);
