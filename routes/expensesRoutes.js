const express = require('express');
const { addExpenses, showExpenses } = require('../controllers/expensesController');
const router = express.Router();

router.post('/add', addExpenses);
router.get('/show', showExpenses);

module.exports = router;
