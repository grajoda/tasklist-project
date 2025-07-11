const express = require('express');

const app = express();

const userRoutes = require('./userRoutes.js');
app.use('/', userRoutes);

const taskRoutes = require('./taskRoutes.js');
app.use('/', taskRoutes);


module.exports = app