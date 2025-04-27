let express = require("express");
let app = express();
require('dotenv').config()


app.use("/public", express.static(__dirname + "/public"));
app.get("/json", function(req, res) {
    if (process.env.VAR_NAME === "uppercase") {
  response = "Hello World".toUpperCase();
} else {
  response = "Hello World";
});
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});




































 module.exports = app;
