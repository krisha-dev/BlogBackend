const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require("./routes/authRoutes");
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(logger);
app.use(morgan('dev'));

// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes); // 

// Error handling middleware
app.use(errorHandler);

// MongoDB connection and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
