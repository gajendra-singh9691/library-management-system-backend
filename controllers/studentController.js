const Student = require('../models/Student');

exports.addNewStudent = async (req, res) => {
  try {
    const { name, email, phone, paymentmode, timedurestion, time, subscription, seatNo, amount, startDate, endDate } = req.body;

    const existingEmail = await Student.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: `Email ${email} already exists` });
    }

    // Check if phone already exists
    const existingPhone = await Student.findOne({ phone });
    if (existingPhone) {
      return res.status(400).json({ message: `Phone number ${phone} already exists` });
    }

    const newStudent = new Student({
      name, email, phone, paymentmode, timedurestion, time, subscription, seatNo, amount, startDate, endDate
    });

    await newStudent.save();
    res.json({ message: 'Student enrolled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.removeStudent = async (req, res) => {
  try {
    // console.log("Working");
    
    const { phone } = req.body;
    const response = await Student.deleteOne({ phone });

    if (response.deletedCount === 0)
      return res.json({ message: `No student found with phone ${phone}` });

    res.json({ message: 'Student removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { email } = req.body;
    await Student.deleteOne({ email });
    res.json({ message: `${email} account deleted` });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const data = await Student.find();
    res.json({ data });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
