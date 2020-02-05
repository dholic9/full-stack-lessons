/* eslint-disable no-console */

const express = require('express');
const app = express();

const arr = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 2,
    name: 'Little Yoshi',
    course: 'Meming',
    grade: 9002
  }
];

app.get('/api/grades', (req, res) => {
  res.json(arr);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
