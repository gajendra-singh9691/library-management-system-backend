const express = require('express');
const { addIncome, showIncome } = require('../controllers/incomeController');
const router = express.Router();

router.post('/add', addIncome);
router.get('/show', showIncome);

module.exports = router;
