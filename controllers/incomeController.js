const Income = require('../models/Income');

exports.addIncome = async (req, res) => {
  try {
    const { name, paymentmode, amount } = req.body;
    const newIncome = new Income({ name, paymentmode, amount });
    await newIncome.save();
    res.json({ message: `${amount} added to Income` });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.showIncome = async (req, res) => {
  try {
    const data = await Income.find();
    res.json({ data });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
