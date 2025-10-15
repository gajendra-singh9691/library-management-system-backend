const express = require('express');
const { addNewStudent, removeStudent, deleteUser, getAllStudents } = require('../controllers/studentController.js');
const router = express.Router();

router.post('/add', addNewStudent);
router.post('/remove', removeStudent);
router.post('/delete', deleteUser);
router.get('/all', getAllStudents);

module.exports = router;
