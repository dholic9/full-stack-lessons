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

const evenNumbers = numbers.filter(number => number % 2 === 0)

const overFive = numbers.filter(number => number > 5)

const startWithT = names.filter(name => name.startsWith('T'))

const haveD = names.filter(name => name.includes('D') || name.includes('d'))
