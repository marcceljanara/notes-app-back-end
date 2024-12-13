/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = 5000;
const HOST = process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';

// Middleware
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());

// Routes
app.use(routes);

// Start Server
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
