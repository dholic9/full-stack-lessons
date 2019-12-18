/* eslint-disable no-console */

const obj = require('./data.json');

console.log(obj);

if (process.argv[2] === 'read') {
  console.log('read fired:', obj.notes);
} else if (process.argv[2] === 'create') {
  if (obj.notes[obj.nextId] === undefined) {
    console.log(obj.nextId);
    console.log(process.argv[3]);
    obj.notes[obj.nextId] = process.argv[3];
    obj.nextId++;
    console.log('created');
    console.log(obj.nextId);
  }
} else if (process.argv[2] === 'delete') {
  delete obj.notes[process.argv[3]];
  console.log('deleted');
} else if (process.argv[2] === 'update') {
  obj.notes[process.argv[3]] = process.argv[4];
  console.log('updated');
}
