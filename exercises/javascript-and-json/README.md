# javascript-and-json

This lesson covers the basics of converting data to and from JSON.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/javascript-and-json` directory in your terminal.

### Introduction

JSON is an extremely common data interchange format used to send and store information in computer systems. Before JSON, XML was an extremely popular data interchange format, but JSON's simplicity and readability has made it the preferred format.

### Exercise

1. Read about JSON in the MDN WebDocs - [No, really, what is JSON?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#No_really_what_is_JSON).
1. Read about the purpose of serialization on Stack Overflow - [What is serialization?](https://stackoverflow.com/questions/633402/what-is-serialization)
1. Create an `index.html` containing a basic skeleton and add a `script` tag with a `src` attribute of `"main.js"`.
1. Within `main.js`:
    - Create an `Array` of three `Object` literals representing books.
    - Give each book an `isbn`, a `title`, and an `author` (all `Strings`).
    - Use [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to create a JSON `String` of your books `Array` and log the result and its type to the console (see [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)).
    - Create a `String` in JSON format holding data representing a student with a `Number id` and a `String name`.
    - Use [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) to create a JavaScript `Object` from your JSON `String` and log the result and its type to the console (see [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)).

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is JSON?
- What are serialization and deserialization and why are they useful?
- How to you serialize data into a JSON string using JavaScript?
- How do you deserialize a JSON string using JavaScript?
