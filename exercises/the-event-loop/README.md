# the-event-loop

The Event Loop is one of the **four** major concepts that sets JavaScript apart from many other languages. (Prototypal Inheritance, How `this` works, closures, and The Event Loop). Understanding how asynchronous programming works is absolutely critical to modern Web development and especially programming in JavaScript.

<p align="middle">
  <img src="images/node-architecture.jpg">
</p>

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/the-event-loop` directory in your terminal.

### Exercise

1. Read about `setTimeout()` in the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout).
1. Within `timeout.js`:
    - use `console.log()` to print the message `"Hello, just a moment..."`.
    - use `setTimeout()` and `console.log()` to print the message `"Thanks for waiting!"` after 2 seconds have passed.
1. Execute `timeout.js` with the `node` command to test your code like this:
    ```bash
    node timeout.js
    ```
1. Read about `setInterval()` in the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval).
1. Within `interval.js`:
    - declare a variable to hold the current count (`3`)
    - use `setInterval()` to log the count (`console.log()`) and decrement it every second until it hits `0`.
    - when the current count is `0` log the message `"Blast off!"` and use [`clearInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval) to stop the program.
1. Execute `interval.js` with the `node` command to test your code like this:
    ```bash
    node interval.js
    ```
1. Watch Phil Roberts's JSConf [presentation on the JavaScript Event Loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=659s).

<p align="middle">
  <img src="images/the-event-loop.gif">
</p>

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is the JavaScript Event Loop?
- What is different between non-blocking blocking with respect to how code is executed?
