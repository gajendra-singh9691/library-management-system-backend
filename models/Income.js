const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
  name: String,
  paymentmode: String,
  amount: Number
});

module.exports = mongoose.model('Income', incomeSchema);
