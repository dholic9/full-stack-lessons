# express-post-json

This lesson covers programming an Express web server to receive JSON data in client request bodies.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/express-post-json` directory in your terminal.

### Exercise

1. Create an `index.js` and set up a basic Express `app`.
1. Within `index.js` create an empty array named `grades` and a variable named `nextId` initialized to `1`.
1. Review [basic routing](https://expressjs.com/en/starter/basic-routing.html) in the Express.js docs.
1. Add a route to your `app` that responds to `GET` requests at `'/api/grades'` by sending back JSON with [`res.json()`](https://expressjs.com/en/4x/api.html#res.json).
1. Test your server by sending a `GET` request to `localhost:3000/api/grades`.
1. Read about Express's built-in [JSON parsing middleware](https://expressjs.com/en/4x/api.html#express.json) in the Express.js docs.
1. Enhance your `app` by registering the JSON middleware with `app.use()`.
1. Read about [sending JSON](https://httpie.org/doc#json) with the HTTPie command line client.
1. Read about the [`status()` method](https://expressjs.com/en/4x/api.html#res.status) of the Express `res` object.
1. Test your server by sending a `POST` request to `localhost:3000` that includes a JSON body for a new grade:
    ```json
    {
      "name": "Tim Horist",
      "course": "JavaScript",
      "grade": 100
    }
    ```
    The server should respond with the same grade object it received, plus its `id` using the status code `201`:
    ```json
    {
      "id": 1,
      "name": "Tim Horist",
      "course": "JavaScript",
      "grade": 100
    }
    ```
1. Test that your server is storing all of the grades you give it by sending a `GET` request to `/api/grades` with HTTPie.

<p align="middle">
  <img src="images/express-post-json.gif">
</p>

### Extra - DON'T DO UNTIL AFTER TURNING IN THE ABOVE

1. Add a `public/` directory to your server for an `index.html`, `styles.css`, and `main.js`.
2. Build a small front end with a form that can `POST` JSON data for a new grade to `/api/grades` using `$.ajax`.
3. Test your web site at `http://localhost:3000` in your browser and watching the "Network" tab of the Developer Tools when you submit your form.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
