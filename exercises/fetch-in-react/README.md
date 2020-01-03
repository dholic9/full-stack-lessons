# fetch-in-react

Sending HTTP requests to a server from a React app.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/fetch-in-react` directory in your terminal.

### Exercise

1. Read about [the Component lifecycle methods](https://reactjs.org/docs/react-component.html#the-component-lifecycle) in the official React documentation.
1. Read about [`componentDidMount`](https://reactjs.org/docs/react-component.html#componentdidmount) in the official React documentation.
1. Review how to [use `fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) in the MDN Web Docs.
1. Bookmark React's [lifecycle diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/).
1. Read through all of the files provided with this exercise, including `webpack.config.js` and `package.json`.
1. Run `npm install` to download all dependencies listed in `package.json` to `node_modules`.
1. Run `npm run dev` to start `webpack-dev-server`, then visit `http://localhost:3000 in your web browser. The browser should automatically refresh when you change any source code.
1. Complete the implementation of `src/app.jsx` to send a `GET` request to `https://jsonplaceholder.typicode.com/users` for a list of ten users after `App` has mounted.

### Extra

Add an `error` state to your `App` that displays an error message if the request for users fails.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- When does React call a component's `componentDidMount` method?
- Name three React.Component lifecycle methods.
- How do you pass data to a child component?
