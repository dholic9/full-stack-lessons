/* eslint-disable no-console */

const array = [{
  isbn: '080419453X',
  title: 'Colorless Tsukuru Tazaki and His Year of Pilgrimage',
  author: 'Haruki Murakami'
}, {
  isbn: '1400079276',
  title: 'Kafka on the Shore',
  author: 'Haruki Murakami'
}, {
  isbn: '9780099528982',
  title: 'Norwegian Wood',
  author: 'Haruki Murakami'
}];

const jsonStr = JSON.stringify(array);
console.log('stringify result:', jsonStr, 'typeof:', typeof jsonStr);

const student = {
  'Number id': 7474,
  Name: 'David'
};

const jsonStudent = JSON.stringify(student);

const parsedStudent = JSON.parse(jsonStudent);

console.log('parsed student: ', parsedStudent);
console.log('typeof parsed student: ', typeof parsedStudent);
