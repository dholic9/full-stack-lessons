# react-jsx

Using JSX to create React elements.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/react-jsx` directory in your terminal.

### Exercise


1. Read [about JSX and why it is used](https://reactjs.org/docs/introducing-jsx.html) in the official React documentation.
2. Read the beginning of [JSX in Depth](https://reactjs.org/docs/jsx-in-depth.html) in the official React documentation.
3. Visit [this preconfigured Babel REPL](https://babeljs.io/repl#?browsers=&build=&builtIns=usage&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=&prettier=true&targets=&version=7.7.7&externalPlugins=%40babel%2Fplugin-transform-react-jsx%407.7.7) and paste the following JSX code in. Notice how Babel uses a **plugin** to transform the JSX into valid JavaScript that a browser can understand.
    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';

    const element = <h1>Hello, JSX!</h1>;

    ReactDOM.render(
      element,
      document.querySelector('#root')
    );
    ```
4. Create a new `package.json` and install the following `devDependencies`:
    - `webpack`
    - `webpack-cli`
    - `babel-loader`
    - `@babel/core`
    - `@babel/plugin-transform-react-jsx`
5. Install the following direct `dependencies`:
    - `react`
    - `react-dom`
6. Add a `"build"` script to `package.json` that runs `webpack`.
7. Review the `webpack.config.js` that is included in this exercise. Notice the Babel plugins being used by `babel-loader`.
8. Review the code in `src/index.jsx`.
9. Run your `"build"` script with `npm` by doing `npm run build` in the terminal.
10. Open `dist/index.html` in your browser.

![React JSX Solution](react-jsx-solution.png)

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is JSX?
- Why must the React object be imported when authoring JSX?
- How can you make Webpack and Babel work together to convert JSX into valid JavaScript?
