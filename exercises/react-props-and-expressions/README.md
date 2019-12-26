# react-props-and-expressions

Passing dynamic values to React components.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/react-props-and-expressions` directory in your terminal.

### Exercise

1. Read about [embedding expressions in JSX](https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx) in the official React documentation.
2. Read about [Props in JSX](https://reactjs.org/docs/jsx-in-depth.html#props-in-jsx) in the official React documentation.
3. Read about [Components and Props](https://reactjs.org/docs/components-and-props.html) in the official React documentation.
4. Create a new `package.json` and install the following:
    - `dependencies`
      - `react`
      - `react-dom`
    - `devDependencies`
      - `webpack`
      - `webpack-cli`
      - `babel-loader`
      - `@babel/core`
      - `@babel/plugin-transform-react-jsx`
5. Create a `webpack.config.js` and add the following JavaScript to it.
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
6. Add a `"build"` script to your `package.json` that runs `webpack`.
7. Create two directories - `src` and `dist`.
8. Add an `index.jsx` to `src` and an `index.html` to `dist`.
9. Within `dist/index.html`:
    - Create an HTML skeleton.
    - Add a `div` with the id `"root"`.
    - Add a `script` tag for `"main.js"`.
10. Within `src/index.jsx`
    - Import `React` from the `"react"` package.
    - Import `ReactDOM` from the `"react-dom"` package.
    - Define a function component named `CustomButton` that returns JSX for a `<button>` with `props.text` as its text content.
    - Use [`ReactDOM.render`](https://reactjs.org/docs/react-dom.html#render) to mount three instances of your `CustomButton` component in a `div` to your `div#root` element.
      ```jsx
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
11. Run your `"build"` script by doing `npm run build` in your terminal.
12. Open `dist/index.html` in your browser to see your rendered buttons.
    ![Props and Expressions](react-props-and-expressions-solution.png)
13. **Note:** Webpack does not automatically recompile your JSX code. You must re-run your `"build"` script to create a new `main.js` (or add an NPM script named `watch` that runs `webpack --watch`).

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What are props in React?
- How do you pass props to a component?
- How do you write JavaScript expressions in JSX?
