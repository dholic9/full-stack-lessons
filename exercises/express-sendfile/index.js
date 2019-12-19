/* eslint-disable no-console */

var express = require('express');
var app = express();

app.use((req, res, next) => {
  var options = { root: __dirname };
  if (req.originalUrl === '/index.html' || req.originalUrl === '/styles.css' || req.originalUrl === '/main.js') {
    res.sendFile(req.originalUrl, options, err => {
      if (err) {
        console.log(err);
        next();
      } else {
        console.log('send:', req.originalUrl);
      }
    });
  } else {
    next();
  }
});

app.listen(3000, () => {
  console.log('server is listening');
});
