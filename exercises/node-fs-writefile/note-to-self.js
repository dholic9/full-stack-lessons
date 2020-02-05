/* eslint-disable no-console */

const fs = require('fs');

fs.writeFile('./note.txt', process.argv[2], 'utf8', err => { console.log(err); });
