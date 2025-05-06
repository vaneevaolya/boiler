const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(req.method + ' ' + req.path + '-' + req.ip);
  next();
});

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(3000, () => {
  console.log('listening');
});





































 module.exports = app;
