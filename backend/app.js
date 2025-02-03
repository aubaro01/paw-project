const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const douctor_routes = require('./routes/douctor_routes');
require('dotenv').config();


// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});


// Routes,  não sei se fiz certo
app.use('/doctors', douctor_routes);


module.exports = app;