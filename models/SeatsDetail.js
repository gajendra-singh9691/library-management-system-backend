const mongoose = require('mongoose');

const seatsSchema = new mongoose.Schema({
  "00:00 - 3:00": Boolean,
  "3:00 - 6:00": Boolean,
  "6:00 - 9:00": Boolean,
  "9:00 - 12:00": Boolean,
  "12:00 - 15:00": Boolean,
  "15:00 - 18:00": Boolean,
  "18:00 - 21:00": Boolean,
  "21:00 - 00:00": Boolean,
});

module.exports = mongoose.model('SeatsDetail', seatsSchema);
