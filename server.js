// Express
const express = require('express');

// Route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Creates an app
const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// Assess information coming from froms
app.use(express.urlencoded({ extended: true }));

// 
app.use(express.json());

// Static page
app.use(express.static('public'));

// Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener PORT
app.listen(PORT, () => console.log(`API server ready http://localhost:${PORT}`));
