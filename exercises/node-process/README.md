# node-process

This exercise introduces the concept of a computer process and touches on how programs run on an operating system. Full stack Web development is based on making multiple processes work together to form one application, so having at least a cursory awareness of computer processes is necessary. This will be extremely important when learning about clients, servers, and databases.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/node-process` directory in your terminal.

### Introduction

The computer you are using right now to work on this exercise is running many processes simultaneously. If you are a Windows user, then you may be familiar with the Task Manager application. On macOS, try opening the Activity Monitor application. Your operating system is managing a lot of programs! Take a look at the list! What's using the most CPU? The most memory?

### Exercise

1. Read the introductory section of the [Process (computing) article on Wikipedia](https://en.wikipedia.org/wiki/Process_(computing)).
1. In your terminal, use the `top` command to see how many processes are running in your development environment. You should only see a few processes and their CPU and memory usage should be pretty low. Press `q` to exit `top` at any time.
1. Open a second terminal (a new Tab or Window will do) into your development environment. Run the command `top` in the first terminal and leave it running. While keeping an eye on the terminal running `top`, use the `node` command to enter the Node.js REPL in the second terminal. Notice how `node` is added to the list of running processes in `top`. You can exit `node` at any time by pressing `Ctrl + C` twice.
1. Take a screenshot of your running processes and add it to the exercise directory to check into Git.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is a computer process?
- Roughly how many computer processes are running on your host operating system (Task Manager or Activity Monitor)?
- Why should a full stack Web developer know that computer processes exist?
