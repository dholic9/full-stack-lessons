# react-class-components

Creating reusable components by extending `React.Component`.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/react-class-components` directory in your terminal.

### Exercise

1. Create a basic React project with the appropriate setup:
    - a new `package.json`
    - required dependencies, including `react`, `webpack`, `babel`, etc
    - `src/index.jsx`
    - `dist/index.html`
    - a `"build"` script
    - the following `webpack.config.js`
      ```js
      module.exports = {
        resolve: {
          extensions: ['.js', '.jsx']
        },
        module: {
          rules: [
            {
              test: /\.jsx?$/,
              use: {
                loader: 'babel-loader',
                options: {
                  plugins: [
                    '@babel/plugin-transform-react-jsx'
                  ]
                }
              }
            }
          ]
        }
      };
      ```
1. Review [Components and Props](https://reactjs.org/docs/components-and-props.html) in the official React documentation.
1. Read the [`React.Component` Overview](https://reactjs.org/docs/react-component.html#overview) in the official React documentation.
1. Add the following code to `src/index.jsx` and refactor `CustomButton` from a **function component** to a **class component**.
    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';

    function CustomButton(props) {
      return (
        <button>{ props.text }</button>
      );
    }

    const element = (
      <div>
        <CustomButton text="I"/>
        <CustomButton text="know"/>
        <CustomButton text="React!"/>
      </div>
    );

    ReactDOM.render(
      element,
      document.querySelector('#root')
    );
    ```
1. Use your `"build"` script to compile your JSX code and open `dist/index.html` in your browser to see your three buttons.
1. **Note:** Webpack does not automatically recompile your JSX code. You must re-run your `"build"` script to create a new `main.js` (or add an NPM script named `watch` that runs `webpack --watch`).

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- How do you create "class" component in React?
- How do you access props in a class component?
