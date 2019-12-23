# express-notes-api

Building a small API to create, read, update, and delete notes.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/express-notes-api` directory in your terminal.

### Introduction

For this exercise you are tasked with building a small server that performs Create, Read, Update, and Delete (CRUD) operations on a collection of notes.

The notes are stored in a JSON file. Each note object has two properties: `id` and `content`. `id` is a positive integer and `content` is a string.

You have been given a `package.json` to start out that already has `express` listed as a dependency. Additionally, the `nodemon` package has been added as a `devDependency`.

To download the dependencies required by this project, simply run `npm install` without any additional arguments. `package.json` will be read by `npm` and the `dependencies` and `devDependencies` will be automatically downloaded into `node_modules`.

```bash
npm install
```

Examine the `"scripts"` property of `package.json`. A script has been added for you to start your server and automatically restart it if any of your JavaScript files are changed. To launch the server in watch mode, use the following command:

```bash
npm run dev:server
```

You will be testing your server with the HTTPie command line client.

**Each working feature should not cause any errors to be logged to the server terminal.**

**After implementing each feature, open a pull request and send it to the instructors for review so that they may monitor your progress.**

### Feature 1 - Clients can `GET` a list of notes.

If the client issues a `GET` request to the `/api/notes` endpoint, then they should receive a `200` response containing a JSON array of note objects. If there are no notes, then they should simply receive an empty array.

#### Example Request

<pre>
GET /api/notes HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: localhost:3000
User-Agent: HTTPie/0.9.8

</pre>

#### Example Response

<pre>
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 454
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 15:51:25 GMT
ETag: W/"1c6-Ruf2xq+mrx8uslNSjLWfMJJ7TaE"
X-Powered-By: Express

[
    {
        "content": "The event loop is how a JavaScript runtime pushes asynchronous callbacks onto the stack once the stack is cleared.",
        "id": 1
    },
    {
        "content": "Prototypal inheritance is how JavaScript objects delegate behavior.",
        "id": 2
    },
    {
        "content": "In JavaScript, the value of `this` is determined when a function is called; not when it is defined.",
        "id": 3
    },
    {
        "content": "A closure is formed when a function retains access to variables in its lexical scope.",
        "id": 4
    }
]

</pre>

### Feature 2 - Clients can `GET` a single note by `id`.

If a client sends a `GET` request to the `/api/notes/:id` endpoint, then there are three possible outcomes:

1. If the client uses an `id` that is not a positive integer, then they should receive a `400` response containing a JSON object with an `error` property detailing the problem.
1. If there exists a note with the specified `id`, then they should receive a `200` response containing a JSON **object** representing the note with that `id`. **The client _should not_ receive an array as they were not requesting a list.**
1. The there is no note with the specified `id`, then they should receive a `404` response containing a JSON object with an `error` property detailing the problem.

#### Example Request (Bad Request)

<pre>
GET /api/notes/trollololo HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: localhost:3000
User-Agent: HTTPie/0.9.8

</pre>

#### Example Response (Bad Request)

<pre>
HTTP/1.1 400 Bad Request
Connection: keep-alive
Content-Length: 41
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 16:18:26 GMT
ETag: W/"29-eiZTR092ClXGPeHi/BDwiytO0ew"
X-Powered-By: Express

{
    "error": "id must be a positive integer"
}
</pre>

#### Example Request (Successful)

<pre>
GET /api/notes/1 HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: localhost:3000
User-Agent: HTTPie/0.9.8

</pre>

#### Example Response (Successful)

<pre>
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 135
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 16:12:43 GMT
ETag: W/"87-OBEaImm3bglwhKUYK2TeSqzdsXY"
X-Powered-By: Express

{
    "content": "The event loop is how a JavaScript runtime pushes asynchronous callbacks onto the stack once the stack is cleared.",
    "id": 1
}
</pre>

#### Example Request (Not Found)

<pre>
GET /api/notes/13 HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: localhost:3000
User-Agent: HTTPie/0.9.8

</pre>

#### Example Response (Not Found)

<pre>
HTTP/1.1 404 Not Found
Connection: keep-alive
Content-Length: 39
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 16:20:02 GMT
ETag: W/"27-sxbLjUzM6mGLQb3PuNzyrpH9EXU"
X-Powered-By: Express

{
    "error": "cannot find note with id 13"
}

</pre>

### Feature 3 - Clients can `POST` a new note.

If a client sends a `POST` request to `/api/notes`, then there are three possible outcomes:

1. If the client does not include a `content` property in the request body, then they should receive a `400` response containing a JSON object with an `error` property detailing the problem.
1. If the client includes a `content` property in the request body and the note is successfully recorded, then they should receive a `201` response including the created note (with `id`) as a JSON object in the response body.
1. If the client includes a `content` property in the request body and the note is _not_ successfully recorded (_i.e_ an error occured while writing to `data.json`), then they should receive a `500` response containing a JSON object. The JSON object should have an `error` property that states a generic error message: `{ "error": "An unexpected error occurred." }`

#### Example Request (Bad Request)

<pre>
POST /api/notes HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 0
Host: localhost:3000
User-Agent: HTTPie/0.9.8

</pre>

#### Example Response (Bad Request)

<pre>
HTTP/1.1 400 Bad Request
Connection: keep-alive
Content-Length: 39
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 16:50:49 GMT
ETag: W/"27-cK7mvB9kT4Lx7BEn4O9wg8dqUD4"
X-Powered-By: Express

{
    "error": "content is a required field"
}

</pre>

#### Example Request (Success)

<pre>
POST /api/notes HTTP/1.1
Accept: application/json, */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 47
Content-Type: application/json
Host: localhost:3000
User-Agent: HTTPie/0.9.8

{
    "content": "Inertia is a property of matter."
}

</pre>

#### Example Response (Success)

<pre>
HTTP/1.1 201 Created
Connection: keep-alive
Content-Length: 53
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 16:51:38 GMT
ETag: W/"35-q9pGWahDdxpuhc3OE2rDwt5FbyQ"
X-Powered-By: Express

{
    "content": "Inertia is a property of matter.",
    "id": 5
}

</pre>

### Feature 4 - Clients can `DELETE` a note by `id`.

If a client sends a `DELETE` request to the `/api/notes/:id` endpoint, then there are four possible outcomes:

1. If the client does not specify a valid `id` (a positive integer), then they should receive a `400` response containing a JSON object with an `error` property detailing the problem.
1. If the client specified a valid `id`, but the matching note does not exist, then they should receive a `404` response containing a JSON object with an `error` property detailing the problem.
1. If the client specified a valid `id`, but an error occured while writing to `data.json`, then they should receive a `500` response containing a JSON object. The JSON object should have an `error` property that states a generic error message: `{ "error": "An unexpected error occurred." }`
1. If the client specified a valid `id` and the note was successfully deleted, then they should receive a `204` response with an empty response body.

#### Example Request (Bad Request)

<pre>
DELETE /api/notes/trollolololol HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 0
Host: localhost:3000
User-Agent: HTTPie/0.9.8

</pre>

#### Example Response (Bad Request)

<pre>
HTTP/1.1 400 Bad Request
Connection: keep-alive
Content-Length: 41
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 17:00:03 GMT
ETag: W/"29-eiZTR092ClXGPeHi/BDwiytO0ew"
X-Powered-By: Express

{
    "error": "id must be a positive integer"
}

</pre>

#### Example Request (Not Found)

<pre>
DELETE /api/notes/13 HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 0
Host: localhost:3000
User-Agent: HTTPie/0.9.8

</pre>

#### Example Response (Not Found)

<pre>
HTTP/1.1 404 Not Found
Connection: keep-alive
Content-Length: 39
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 17:01:39 GMT
ETag: W/"27-sxbLjUzM6mGLQb3PuNzyrpH9EXU"
X-Powered-By: Express

{
    "error": "cannot find note with id 13"
}

</pre>

#### Example Request (Success)

<pre>
DELETE /api/notes/1 HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 0
Host: localhost:3000
User-Agent: HTTPie/0.9.8

</pre>

#### Example Response (Success)

<pre>
HTTP/1.1 204 No Content
Connection: keep-alive
Date: Mon, 23 Dec 2019 17:04:56 GMT
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
X-Powered-By: Express

</pre>

### Feature 5 - Clients can replace a note (`PUT`) by `id`.

If a client sends a `PUT` request to the `/api/notes/:id` endpoint, then there are four possible outcomes:

1. If the client does not specify a valid `id` (a positive integer) **OR** they do not include a `content` property in the request body, then they should receive a `400` response containing a JSON object with an `error` property detailing the problem.
1. If the client specified a valid `id` and `content`, but the matching note does not exist, then they should receive a `404` response containing a JSON object with an `error` property detailing the problem.
1. If the client specified a valid `id` and `content`, but an error occured while writing to `data.json`, then they should receive a `500` response containing a JSON object. The JSON object should have an `error` property that states a generic error message: `{ "error": "An unexpected error occurred." }`
1. If the client specified a valid `id` and `content`, and the note was successfully updated, then they should receive a `200` response containing a JSON object of the updated note.

#### Example Request (Bad `id`)

<pre>
PUT /api/notes/trollololo HTTP/1.1
Accept: application/json, */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 23
Content-Type: application/json
Host: localhost:3000
User-Agent: HTTPie/0.9.8

{
    "content": "hahahaha"
}

</pre>

#### Example Response (Bad `id`)

<pre>
HTTP/1.1 400 Bad Request
Connection: keep-alive
Content-Length: 41
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 17:12:50 GMT
ETag: W/"29-eiZTR092ClXGPeHi/BDwiytO0ew"
X-Powered-By: Express

{
    "error": "id must be a positive integer"
}

</pre>

#### Example Request (Missing `content`)

<pre>
PUT /api/notes/1 HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 0
Host: localhost:3000
User-Agent: HTTPie/0.9.8

</pre>

#### Example Response (Missing `content`)

<pre>
HTTP/1.1 400 Bad Request
Connection: keep-alive
Content-Length: 39
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 17:14:48 GMT
ETag: W/"27-cK7mvB9kT4Lx7BEn4O9wg8dqUD4"
X-Powered-By: Express

{
    "error": "content is a required field"
}

</pre>

#### Example Request (Not Found)

<pre>
PUT /api/notes/13 HTTP/1.1
Accept: application/json, */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 44
Content-Type: application/json
Host: localhost:3000
User-Agent: HTTPie/0.9.8

{
    "content": "I think there is a note here."
}

</pre>

#### Example Response (Not Found)

<pre>
HTTP/1.1 404 Not Found
Connection: keep-alive
Content-Length: 39
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 17:19:16 GMT
ETag: W/"27-sxbLjUzM6mGLQb3PuNzyrpH9EXU"
X-Powered-By: Express

{
    "error": "cannot find note with id 13"
}

</pre>

#### Example Request (Success)

<pre>
PUT /api/notes/2 HTTP/1.1
Accept: application/json, */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 103
Content-Type: application/json
Host: localhost:3000
User-Agent: HTTPie/0.9.8

{
    "content": "The event loop, this, closures, and prototypal inheritance are special about JavaScript."
}

</pre>

#### Example Response (Success)

<pre>
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 109
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 17:22:30 GMT
ETag: W/"6d-cex2kTo8T2hYUpgOEZeoT4y+M2k"
X-Powered-By: Express

{
    "content": "The event loop, this, closures, and prototypal inheritance are special about JavaScript.",
    "id": 2
}

</pre>

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
