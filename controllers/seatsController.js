const SeatsDetail = require('../models/SeatsDetail');

exports.addSeats = async (req, res) => {
  try {
    const { value } = req.body;
    for (let i = 0; i < value; i++) {
      const seat = new SeatsDetail({
        "00:00 - 3:00": false,
        "3:00 - 6:00": false,
        "6:00 - 9:00": false,
        "9:00 - 12:00": false,
        "12:00 - 15:00": false,
        "15:00 - 18:00": false,
        "18:00 - 21:00": false,
        "21:00 - 00:00": false
      });
      await seat.save();
    }
    res.json({ message: `${value} seats added` });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getSeats = async (req, res) => {
  try {
    const data = await SeatsDetail.find();
    res.json({ data });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateSeat = async (req, res) => {
  try {
    const { id, seatobj } = req.body;
    await SeatsDetail.updateOne({ _id: id }, { $set: seatobj });
    res.json({ message: 'Seat updated' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
