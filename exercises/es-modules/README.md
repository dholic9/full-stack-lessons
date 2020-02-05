# es-modules

Refactoring CommonJS modules to ES modules.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/es-modules` directory in your terminal.

### Exercise

1. Read through all of the files provided in this exercise and note the [CommonJS-style](https://nodejs.org/api/modules.html#modules_modules) `require()` and `module.exports` statements.
2. Read [Sections 1, 2, and 3](http://2ality.com/2014/09/es6-modules-final.html#module-systems-for-current-javascript) of Dr. Axel Rauschmayer's article on the syntax of ECMAScript 6 (ES6) modules.
3. Read about [Webpack's Module Resolution and its rules](https://webpack.js.org/concepts/module-resolution) in the official Webpack documentation.
4. Install the exercise's dependencies by running `npm install`.
5. Start Webpack with a watcher by running the `"watch"` script found in `package.json` and open `dist/index.html` in your browser. In watch mode, Webpack will automatically re-bundle your modules into `main.js`.
    ```bash
    npm run watch
    ```
6. Refactor all of the JavaScript files in `src` to use ES6 module `import` and `export default` statements instead of CommonJS module `require()` and `module.exports` statements.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is an ES6 module and how is it different from a CommonJS module?
- What kind of modules can Webpack support?
