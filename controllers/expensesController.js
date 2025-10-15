const Expenses = require('../models/Expenses');

exports.addExpenses = async (req, res) => {
  try {
    const { reason, paymentMode, amount } = req.body;
    const data = new Expenses({ reason, paymentMode, amount });
    await data.save();
    res.json({ message: `${amount} Rs added in expenses` });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.showExpenses = async (req, res) => {
  try {
    const data = await Expenses.find();
    res.json({ data });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
