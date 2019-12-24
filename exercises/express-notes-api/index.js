/* eslint-disable no-console */

const express = require('express');
const app = express();
const fs = require('fs');
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
  const getId = req.params.id;
  if (getId < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  }
  if (obj.notes[getId]) {
    res.status(200).json(notesObj[getId]);
  }
  if (obj.notes[getId] === undefined) {
    res.status(404).json({
      error: `cannot find note with id ${getId}`
    });
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content) {
    notesObj[obj.nextId] = {
      id: obj.nextId,
      content: req.body.content
    };
    const json = JSON.stringify(obj, null, 2);
    fs.writeFile('./data.json', json, 'utf8', (err, data) => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred' });
      } else {
        res.status(201).json(notesObj[obj.nextId]);
        obj.nextId++;
      }
    });

  }
});

app.delete('/api/notes/:id', (req, res) => {
  const deleteId = req.params.id;
  if (deleteId <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  }
  if (notesObj[deleteId] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${deleteId}` });
  }
  if (notesObj[deleteId]) {
    delete notesObj[deleteId];
    const json = JSON.stringify(obj, null, 2);
    fs.writeFile('./data.json', json, 'utf8', (err, data) => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const putId = req.params.id;
  if (putId <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (notesObj[putId] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${putId}` });
  } else if (req.body.content && notesObj[putId]) {
    notesObj[putId].content = req.body.content;
    const json = JSON.stringify(obj, null, 2);
    fs.writeFile('./data.json', json, 'utf8', (err, data) => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred' });
      } else {
        res.status(200).json(notesObj[putId]);
      }
    });
  }
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
