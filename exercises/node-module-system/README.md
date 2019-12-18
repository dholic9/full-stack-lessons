# node-module-system

This lesson introduces the basics of how Node.js supports [modular programming](https://en.wikipedia.org/wiki/Modular_programming).

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/node-module-system` directory in your terminal.

### Introduction

You may be familiar with some approaches to modular programming. Defining classes and separating behavior into multiple functions are forms of modular programming. The whole idea behind modular programming is to decompose a solution to a large problem into many smaller solutions to sub-problems.

In JavaScript, a "module" is a single `.js` file. Node.js supports modules using a system heavily influenced by [CommonJS](https://en.wikipedia.org/wiki/CommonJS). Most non-trivial Node.js programs are made of many, many modules. Authors of Node.js programs strive to separate their code into modules that each provide a small chunk of functionality. The program as a whole is the result of all of these modules working together in concert.

Let's explore some of the things that the Node.js module system includes.

### Exercise

1. Read the [introductory section of Modules](https://nodejs.org/docs/latest-v10.x/api/modules.html#modules_modules) in the official Node.js documentation.
1. Read about [the module wrapper](https://nodejs.org/docs/latest-v10.x/api/modules.html#modules_the_module_wrapper) in the official Node.js documentation.
1. Within any Node.js module, `exports`, `require`, `module`, `__filename`, and `__dirname` all _appear_ to be "global" variables. They're defined and present. Within `a-wrapped-module.js`, use `console.log` (with labels!) to:
    - print the [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) `exports` to the terminal
    - print the value of `exports` to the terminal
    - print the [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) `require` to the terminal
    - print the value of `require` to the terminal
    - print the [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) `module` to the terminal
    - print the value of `module` to the terminal
    - print the [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) `__filename` to the terminal
    - print the value of `__filename` to the terminal
    - print the [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) `__dirname` to the terminal
    - print the value of `__dirname` to the terminal
1. Execute `a-wrapped-module.js` with the `node` command.
1. Read about [the module scope](https://nodejs.org/docs/latest-v10.x/api/modules.html#modules_the_module_scope) in the official Node.js documentation.
1. To get a sense of what is _truly_ global in Node.js programs, compare [the module scope](https://nodejs.org/docs/latest-v10.x/api/modules.html#modules_the_module_scope) to [Node.js globals](https://nodejs.org/docs/latest-v10.x/api/globals.html).

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is a JavaScript module?
- What values are passed into a Node.js module's local scope?
- Give two examples of _truly_ global variables in a Node.js program.
