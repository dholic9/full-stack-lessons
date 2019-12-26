# react-elements

Using React and ReactDOM to render elements.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/react-elements` directory in your terminal.

### Exercise

1. Initialize this directory with a `package.json` using `npm`.
2. Install the [`react`](https://www.npmjs.com/package/react) and [`react-dom`](https://www.npmjs.com/package/react-dom) packages as `dependencies`.
3. Install the [`webpack`](https://www.npmjs.com/package/webpack) and [`webpack-cli`](https://www.npmjs.com/package/webpack-cli) packages as `devDependencies`.
4. Read about React on the [https://reactjs.org/](https://reactjs.org/) home page.
5. Create a directory named `dist` and add an `index.html` file to it containing an HTML skeleton.
6. Within `index.html`, add a `div` with an `id` attribute of `"root"` to your `index.html`
7. Add a `script` tag below your `div` with a `src` attribute of `"main.js"`. You don't need to create a `main.js` file; Webpack will do it for you.
8. Add a `"build"` script to `package.json` that runs `webpack`.
9. Create a directory named `src` and add a file to it named `index.js`. At this point your directory should have the following structure:
    ```shell
    react-elements/
    ├── .npmrc
    ├── dist
    │   └── index.html
    ├── node_modules
    ├── package.json
    └── src
        └── index.js
    ```
10. Within `index.js`, [import `React`](https://reactjs.org/docs/react-api.html) from the `react` package and import [`ReactDOM`](https://reactjs.org/docs/react-dom.html) from the `react-dom` package.
11. [Use `React.createElement`](https://reactjs.org/docs/react-api.html#createelement) to create an `h1` React element with `null` props and a `children` string of `'Hello, React!'`. Log it to the console if you want to see what a React element looks like.
12. [Use `ReactDOM.render`](https://reactjs.org/docs/react-dom.html#render) to mount your React element into your `div`.
13. Run your `"build"` script and open `dist/index.html` in your browser.
    ```shell
    npm run build
    ```

![React Elements solution](react-elements-solution.png)

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is React?
- What is a React element?
- How do you mount a React element to the DOM?
