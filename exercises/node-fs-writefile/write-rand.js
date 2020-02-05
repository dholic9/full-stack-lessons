/* eslint-disable no-console */

const fs = require('fs');

fs.writeFile('./random.txt', Math.random(), 'utf8', err => { console.log(err); });
