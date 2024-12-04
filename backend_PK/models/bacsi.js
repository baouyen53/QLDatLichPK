const mongoose = require('mongoose');

const bacSiSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model('BacSi', bacSiSchema);
