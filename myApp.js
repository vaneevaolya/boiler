let express = require("express");
let app = express();
require('dotenv').config()


app.use('/', (req, res, next) => {
  console.log(req.method, req.path, req.ip);
  next();
})

app.use('/json', (req, res) => {
	let response = "Hello json";
	if(process.env.MESSAGE_STYLE === 'uppercase') {
		return res.json({message:response.toUpperCase()})
	} else {
  	return res.json({message:response})
	}
})




































 module.exports = app;
