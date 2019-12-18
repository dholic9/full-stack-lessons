/* eslint-disable no-console */

const fs = require('fs');

fs.readFile(`${process.argv[2]}`, 'utf8', (err, data) => {
  console.log(err);
  fs.writeFile(`${process.argv[3]}`, data, err => { console.log(err); });
});
