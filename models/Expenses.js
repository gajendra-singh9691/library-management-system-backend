const mongoose = require('mongoose');

const expensesSchema = new mongoose.Schema({
  reason: String,
  paymentMode: String,
  amount: Number
});

module.exports = mongoose.model('Expenses', expensesSchema);
