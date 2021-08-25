# Bcrypt Password

🔐 Simple API using the [`bcrypt`](https://en.wikipedia.org/wiki/Bcrypt) hash function to encrypt user password.

## Why?

As developers, we **should not** storage raw user passwords, for security reasons. Then, we need to encrypt the password before saving in a database, and for this purpose, `bcrypt` is a good option because you can't decrypt the result easily.

## Requirements

To run this project locally, you need:

- Node.js
- Yarn

## Running Locally

First, install the dependencies, typing in terminal:

```bash
yarn install
```

Then, build the project with the typescript compiler:

```bash
yarn tsc
```

And finally run the project with:

```
node dist/index.js
# > Server listening on port 3333
```

You can also run in development mode, watching the files in the `src/` folder:

```bash
yarn dev
```

## API Endpoints

### Set the user password

Request:
```jsonc
// POST /user
{ "password": "strong-password1234" }
```

Response (**don't send the encrypted passwords in real projects!**):
```jsonc
{ "password": "$2a$10$RenSi6mFSfrMaSUaYIvE7OABT3OU6RxHHzNq20UQpSSJOgqmuZ9MO" }
```

### Log in

Request:
```jsonc
// POST /login
{ "password": "strong-password1234" }
```

Response:
```jsonc
{ "success": true /*or false, if passwords not match*/ }
```
