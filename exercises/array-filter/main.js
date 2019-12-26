/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Bill',
  'Monique',
  'Dan',
  'TJ',
  'Scott',
  'Tim H.',
  'Cody',
  'Brett',
  'Andy',
  'Tim D.'
];

const evenNumbers = numbers.filter(number => (number % 2) === 0);
console.log('evenNumbers: ', evenNumbers);

const overFive = numbers.filter(number => number > 5);
console.log('overFive: ', overFive);

const startWithT = names.filter(name => name.startsWith('T'));
console.log('startWithT: ', startWithT);

const haveD = names.filter(name => name.includes('D' || 'd'));
console.log('haveD: ', haveD);
