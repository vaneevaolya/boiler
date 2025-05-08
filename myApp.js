const express = require('express');
const app = express();

// Root-level request logger middleware
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, 
  (req, res) => {
    res.send({time: req.time})
  });





































 module.exports = app;
