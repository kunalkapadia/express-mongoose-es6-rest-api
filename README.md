# Express & mongoose REST API Boilerplate in ES6 with Code Coverage [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[![Build Status](https://img.shields.io/travis/KunalKapadia/express-mongoose-es6-rest-api/master.svg?style=flat-square)](https://travis-ci.org/KunalKapadia/express-mongoose-es6-rest-api)
[![Coverage Status](https://img.shields.io/coveralls/KunalKapadia/express-mongoose-es6-rest-api/master.svg?style=flat-square)](https://coveralls.io/github/KunalKapadia/express-mongoose-es6-rest-api?branch=master)
[![Code Climate](https://img.shields.io/codeclimate/github/KunalKapadia/express-mongoose-es6-rest-api.svg?style=flat-square)](https://codeclimate.com/github/KunalKapadia/express-mongoose-es6-rest-api)
[![bitHound Overall Score](https://www.bithound.io/github/KunalKapadia/express-es6-rest-api-starter/badges/score.svg)](https://www.bithound.io/github/KunalKapadia/express-es6-rest-api-starter)
[![bitHound Dependencies](https://www.bithound.io/github/KunalKapadia/express-mongoose-es6-rest-api/badges/dependencies.svg)](https://www.bithound.io/github/KunalKapadia/express-mongoose-es6-rest-api/master/dependencies/npm)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![MIT License](https://img.shields.io/npm/l/stack-overflow-copy-paste.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Contact me on Codementor](https://cdn.codementor.io/badges/contact_me_github.svg)](https://www.codementor.io/kunalkapadia?utm_source=github&utm_medium=button&utm_term=kunalkapadia&utm_campaign=github)

# [![Express ES6 REST API Starter](https://cloud.githubusercontent.com/assets/4172932/12660610/90f5b856-c63a-11e5-878e-c9f0bbf33090.jpg)](https://github.com/KunalKapadia/express-es6-rest-api-starter)

## Overview

This is a boilerplate application for building REST APIs in Node.js using ES6 and Express with Code Coverage. Helps you stay productive by following best practices. Follows [Airbnb's Javascript style guide](https://github.com/airbnb/javascript).

Heavily inspired from [Egghead.io - How to Write an Open Source JavaScript Library](https://egghead.io/series/how-to-write-an-open-source-javascript-library).

### Features

| Feature                                | Summary                                                                                                                                                                                                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ES6 via Babel                  	 	 | ES6 support using [Babel](https://babeljs.io/).  |
| Code Linting               			 | JavaScript code linting is done using [ESLint](http://eslint.org) - a pluggable linter tool for identifying and reporting on patterns in JavaScript. Uses ESLint with [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), which tries to follow the Airbnb JavaScript style guide.                                                                                                |
| Auto server restart                  	 | Restart the server using [nodemon](https://github.com/remy/nodemon) in real-time anytime an edit is made, with babel compilation and eslint.                                                                                                                                                                            |
| ES6 Code Coverage via [istanbul](https://www.npmjs.com/package/istanbul)                  | Supports code coverage of ES6 code using istanbul and mocha. Code coverage reports are saved in `coverage/` directory post `npm test` execution. Open `lcov-report/index.html` to view coverage report. `npm test` also displays code coverage summary on console.                                                                                                                                                                            |
| Debugging via [debug](https://www.npmjs.com/package/debug)           | Instead of inserting and deleting console.log you can replace it with the debug function and just leave it there. You can then selectively debug portions of your code by setting DEBUG env variable. If DEBUG env variable is not set, nothing is displayed to the console.                       |
| Promisified Code via [bluebird](https://github.com/petkaantonov/bluebird)           | We love promise, don't we ? All our code is promisified and even so our tests via [supertest-as-promised](https://www.npmjs.com/package/supertest-as-promised).                       |
| API parameter validation via [express-validation](https://www.npmjs.com/package/express-validation)           | Validate body, params, query, headers and cookies of a request (via middleware) and return a response with errors; if any of the configured validation rules fail. You won't anymore need to make your route handler dirty with such validations. |

- CORS support via [cors](https://github.com/troygoode/node-cors)
- Uses [http-status](https://www.npmjs.com/package/http-status) to set http status code. It is recommended to use `httpStatus.INTERNAL_SERVER_ERROR` instead of directly using `500` when setting status code.

## Getting Started

Clone the repo:
```sh
git clone git@github.com:KunalKapadia/express-mongoose-es6-rest-api.git
cd express-mongoose-es6-rest-api
```

Install dependencies:
```sh
npm install
```

Start server:
```sh
# set DEBUG env variable to get debug logs
DEBUG=express-mongoose-es6-rest-api:* npm start
# OR
# requires gulp to be installed globally
npm i -g gulp
gulp serve
```

Execute tests:
```sh
# compile with babel and run tests
npm test (or gulp mocha)

# use --code-coverage-reporter text to get code coverage for each file
gulp mocha --code-coverage-reporter text
```

Other gulp tasks:
```sh
# Wipe out dist and coverage directory
gulp clean

# Lint code with ESLint
gulp lint

# Default task: Wipes out dist and coverage directory. Compiles using babel.
gulp
```

##### Commit:

Follows [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)
```sh
# Lint and execute tests before committing code.
npm run commit
# OR
# use git commit directly with correct message convention.
git commit -m "chore(ghooks): Add pre-commit and commit-msg ghook"
```

##### Deployment

```sh
# compile to ES5
1. npm build or gulp

# upload dist/ to your server
2. scp -rp dist/ user@dest:/path

# install production dependencies only
3. npm i --production

# Use any process manager to start your services
4. pm2 start index.js
```

In production you need to make sure your server is always up so you should ideally use any of the process manager recommended [here](http://expressjs.com/en/advanced/pm.html).
We recommend [pm2](http://pm2.keymetrics.io/) as it has several useful features like it can be configured to auto-start your services if system is rebooted.

## Logging

Universal logging library [winston](https://www.npmjs.com/package/winston) is used for logging. It has support for multiple transports.  A transport is essentially a storage device for your logs. Each instance of a winston logger can have multiple transports configured at different levels. For example, one may want error logs to be stored in a persistent remote location (like a database), but all logs output to the console or a local file. We just log to the console for simplicity, you can configure more transports as per your requirement.

#### API logging
Logs detailed info about each api request to console during development.
![Detailed API logging](https://cloud.githubusercontent.com/assets/4172932/12563354/f0a4b558-c3cf-11e5-9d8c-66f7ca323eac.JPG)

#### Error logging
Logs stacktrace of error to console along with other details. You should ideally store all error messages persistently.
![Error logging](https://cloud.githubusercontent.com/assets/4172932/12563361/fb9ef108-c3cf-11e5-9a58-3c5c4936ae3e.JPG)

## Code Coverage
Get code coverage summary on executing `npm test`
![Code Coverage Text Summary](https://cloud.githubusercontent.com/assets/4172932/12827832/a0531e70-cba7-11e5-9b7c-9e7f833d8f9f.JPG)

`npm test` also generates HTML code coverage report in `coverage/` directory. Open `lcov-report/index.html` to view it.
![Code coverage HTML report](https://cloud.githubusercontent.com/assets/4172932/12625331/571a48fe-c559-11e5-8aa0-f9aacfb8c1cb.jpg)

## A Boilerplate-only Option

If you would prefer not to use any of our tooling, delete the following files from the project: `package.json`, `gulpfile.babel.js`, `.eslintrc` and `.travis.yml`. You can now safely use the boilerplate with an alternative build-system or no build-system at all if you choose.

## Docs and Recipes

* [Gulp recipes](https://github.com/gulpjs/gulp/tree/master/docs/recipes) - the official Gulp recipes directory includes a comprehensive list of guides for different workflows you can add to your project.

## Contributing

Contributions, questions and comments are all welcome and encouraged. For code contributions submit a pull request with unit test.
