# ES6 RESTful Express API Starter

# [![Express ES6 REST API Starter](https://cloud.githubusercontent.com/assets/4172932/12560514/3a678a08-c3c1-11e5-94b3-b4ce2cbd8e21.jpg)](https://github.com/KunalKapadia/express-es6-rest-api-starter)

## Overview

This is a boilerplate for building REST APIs with ES6 and Express. Helps you stay productive by following best practices. Follows [Airbnb's Javascript style guide](https://github.com/airbnb/javascript).

### Features

| Feature                                | Summary                                                                                                                                                                                                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ES2015 via Babel                  | ES2015 support using [Babel](https://babeljs.io/).  |
| Code Linting               | JavaScript code linting is done using [ESLint](http://eslint.org) - a pluggable linter tool for identifying and reporting on patterns in JavaScript. Uses ESLint with [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), which tries to follow the Airbnb JavaScript style guide.                                                                                                |
| Auto server restart                  | Restart the server using [nodemon](https://github.com/remy/nodemon) in real-time anytime an edit is made, with babel compilation.                                                                                                                                                                            |
| Environment variables           | Supports setting env variable using .env file at the root. Uses [dot-env](https://www.npmjs.com/package/dotenv) to enable this feature.)                       |

## Getting Started

```
# clone it
git clone git@github.com:KunalKapadia/express-es6-rest-api-starter.git
cd express-es6-rest-api-starter
npm install

# Make it your own
rm -rf .git && git init && npm init

# Set environment variables if required
# Create .env file at the root path
NODE_ENV=development
HTTP_PORT=3000

# start server
npm start or gulp serve (requires gulp to be installed globally)
```

## Deploy to Heroku

Coming soon.

## A Boilerplate-only Option

If you would prefer not to use any of our tooling, delete the following files from the project: `package.json`, `gulpfile.babel.js`, `.eslintrc` and `.travis.yml`. You can now safely use the boilerplate with an alternative build-system or no build-system at all if you choose.

## Docs and Recipes

* [Gulp recipes](https://github.com/gulpjs/gulp/tree/master/docs/recipes) - the official Gulp recipes directory includes a comprehensive list of guides for different workflows you can add to your project.

## Contributing

Contributions, questions and comments are all welcome and encouraged. For code contributions submit a pull request with unit test.
