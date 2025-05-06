let express = require("express");
let app = express();
require('dotenv').config()

app.use(function middleware(req, res, next) {
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});






































 module.exports = app;
