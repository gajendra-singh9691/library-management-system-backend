const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  paymentmode: String,
  timedurestion: String,
  time: String,
  subscription: String,
  seatNo: String,
  amount: Number,
  startDate: {
    startdate: Number,
    startmonth: Number,
    startyear: Number
  },
  endDate: {
    enddate: Number,
    endmonth: Number,
    endyear: Number
  }
});

module.exports = mongoose.model('Students', studentSchema);
