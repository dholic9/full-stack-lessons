# webpack-intro

Using Webpack to build front end projects.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/webpack-intro` directory in your terminal.

### Exercise

1. Read about [Webpack](https://webpack.js.org/concepts/why-webpack/) and [modules](https://webpack.js.org/concepts/modules/) in Webpack's documentation.
2. Create a new `package.json` with `npm`.
3. Install the `jquery` package as a `dependency`.
4. [Install `webpack`](https://webpack.js.org/guides/installation/) and the `webpack-cli` as [`devDependencies`](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file).
5. Check your `package.json` to confirm that `jquery` is a `dependency` and `webpack`/`webpack-cli` are `devDependencies`.
6. Add an NPM script to `package.json` named `"build"` that executes `webpack` like this:
    ```json
    "scripts": {
      "build": "webpack",
      "test": "echo \"Error: no test specified\" && exit 1"
    }
    ```
7. Try your NPM script from the command line and look for a `main.js` file in `dist/`.
    ```shell
    npm run build
    ```
8. Open `dist/index.html` in your browser.

![Webpack Intro Solution](webpack-intro-solution.gif)

<p align="middle">
  <img src="module-bundling.svg">
</p>

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is Webpack?
- How do you add a `devDependency` to a package?
- What is an NPM script?
- How do you execute Webpack with `npm run`?
