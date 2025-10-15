require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');

const incomeRoutes = require('./routes/incomeRoutes.js');
const expensesRoutes = require('./routes/expensesRoutes.js');
const seatsRoutes = require('./routes/seatsRoutes.js');
const studentRoutes = require('./routes/studentRoutes.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/income', incomeRoutes);
app.use('/api/expenses', expensesRoutes);
app.use('/api/seats', seatsRoutes);
app.use('/api/students', studentRoutes);

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
