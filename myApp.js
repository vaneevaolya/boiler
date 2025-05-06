let express = require("express");
let app = express();


app.use( (req, res, next)=>{
console.log("req.method+ ’ ‘+req.path+’-’+req.ip ");
next();
});






































 module.exports = app;
