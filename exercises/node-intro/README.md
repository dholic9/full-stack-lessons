# node-intro

This exercise introduces the Node.js JavaScript runtime. You'll be exploring a couple of ways to use the `node` command.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/node-intro` directory in your terminal.

### Introduction

Node.js is a program that allows JavaScript to be run outside of a web browser. It is commonly used to build back ends for Web applications, command-line programs, or any kind of automation that developers wish to perform. Node.js is powered by the same JavaScript engine as the Google Chrome browser. It is free, open-source software and its source code is available on GitHub.

<p align="middle">
  <img src="images/node-github.png">
</p>

Node.js itself is written in a combination of JavaScript and C++. Python and Perl are used to automate the build process of the Node.js source code into a finished command-line executable.

### Exercise

1. Visit the [Node.js](https://nodejs.org/en/) website, but don't download or install it. Node.js has already been installed in your development environment.
1. Read about Node.js on the project's [About page](https://nodejs.org/en/about/). It will probably seem like Greek to you but in time you will understand quite a bit of what's being said there. Feel free to jot down any questions you may have.
1. In your terminal type `node --version` and press `enter` to see the current version of Node.js that is installed in your development environment.
1. If you like, you can peruse the `man` page for `node`, but boy-oh-boy, it's a lot and not required for now.
1. Open the `hello-node.js` file in your code editor and add a line of JavaScript that uses [`console.log()`](https://nodejs.org/docs/latest-v10.x/api/console.html#console_console_log_data_args) to print the string `"Hello, Node!"`.
1. Execute your `hello-node.js` file with the `node` command like this:
    ```bash
    node hello-node.js
    ```
1. In your terminal, type `node` and press `enter` to start the Node.js [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop). You can exit it at any time by pressing `Ctrl + C` twice.
1. Within the `node` REPL type some basic [JavaScript expressions](https://nodejs.org/docs/latest-v10.x/api/repl.html#repl_javascript_expressions) like you would in the console of a Web browser.
    ```js
    1 + 1
    ```
    ```js
    Math.random()
    ```
    ```js
    new Date()
    ```
    ```js
    console.log('wheeee')
    ```
    ```js
    var firstName = 'Ryan'
    var lastName = 'Dahl'
    firstName + ' ' + lastName
    ```
1. Take a screen shot of your Node.js REPL antics to turn in with your Pull Request.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is Node.js?
- What can Node.js be used for?
- What is a REPL?
- When was Node.js created?
- What back end languages have you heard of?
