/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(number => number * 2);
console.log('doubled: ', doubled);

const prices = numbers.map(number => '$' + number.toFixed(2) + '');
console.log('prices: ', prices);

const upperCased = languages.map(word => word.toUpperCase());
console.log('upperCased: ', upperCased);

const firstLetters = languages.map(word => word[0]);
console.log('firstLetters: ', firstLetters);

function biggerThanTen(number) {
  return number > 10;
}

const numberBiggerThan10 = numbers.filter(biggerThanTen);
console.log('numberBiggerThan10: ', numberBiggerThan10);

function biggerThan7(input) {
  return input.length > 7;
}
const wordBiggerThan7 = languages.filter(biggerThan7);
console.log('wordBiggerThan7: ', wordBiggerThan7);

function dividedBy2(number) {
  return number / 2;
}
const numberDividedBy2 = numbers.map(dividedBy2);
console.log('numberDividedBy2:', numberDividedBy2);

function filter(array, predicate) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

const largerThan3 = filter(numbers, number => number > 3);
console.log('largerThan3: ', largerThan3);

function map(array, transform) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(transform(array[i]));
  }
  return newArray;
}

const multiplyBy3 = map(numbers, number => number * 3);
console.log('multiplyBy3: ', multiplyBy3);
