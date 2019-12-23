/* eslint-disable no-console */

const express = require('express');
const app = express();

const grades = [];
let nextId = 1;

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.use(express.json());
app.post('/api/grades', (req, res) => {
  const creatingStudent = req.body;
  creatingStudent.id = nextId;
  grades.push(creatingStudent);
  nextId++;
  res.status(201).json(creatingStudent);
});

app.listen(3000, () => {
  console.log('listening');
});
