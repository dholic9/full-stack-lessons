/* eslint-disable no-console */

const express = require('express');
const app = express();
const obj = require('./data.json');
const notesObj = obj.notes;

app.get('/api/notes', (req, res) => {

  const arr = [];
  for (const keys in notesObj) {
    arr.push(notesObj[keys]);
  }
  res.status(200).json(arr);
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  }

  if (obj.notes[req.params.id]) {
    res.status(200).json(notesObj[req.params.id]);
  }

  if (obj.notes[req.params.id] === undefined) {
    res.status(404).json({
      error: `cannot find note with id ${req.params.id}`
    });
  }
});

app.post('/api/notes', (req, res) => {

});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
