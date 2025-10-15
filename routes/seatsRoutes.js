const express = require('express');
const { addSeats, getSeats, updateSeat } = require('../controllers/seatsController');
const router = express.Router();

router.post('/add', addSeats);
router.get('/get', getSeats);
router.post('/update', updateSeat);

module.exports = router;
