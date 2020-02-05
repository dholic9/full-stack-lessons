# array-filter

Creating a new array and excluding some elements.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/array-filter` directory in your terminal.

### Exercise

1. Review the variables in `main.js`.
2. Read about [`Array.prototype.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) in the MDN Web Docs.
3. In `main.js`, create the following variables using `Array.prototype.filter` and log each of them to the console.
    - `evenNumbers` - all `numbers` that are divisible by `2`.
    - `overFive` - all `numbers` that are greater than `5`.
    - `startWithT` - all `names` that start with a `'T'`.
    - `haveD` - all `names` that include a `'D'` or a `'d'`.
4. Open `index.html` in your browser and check the values you logged to the console.

#### Tips!

- Divisibility can be checked with the [`%` remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()) operator.
- All `Strings` have an [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) method.
- All `Strings` have a [`startsWith`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) method.
- All `Strings` have an [`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) method.


### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is `Array.prototype.filter` useful for?
