/* eslint-disable no-console */

const express = require('express');
const app = express();
const path = require('path');

const thePath = path.join(__dirname, '/public');
console.log(thePath);

app.use(express.static(thePath));

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
