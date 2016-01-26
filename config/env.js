import path from 'path';

// load env variables defined in .env
const config = require('dotenv').config() || {};

// root path of server
config.root = path.join(__dirname, '../');

// set NODE_ENV if not already set
config.NODE_ENV = config.NODE_ENV || 'development';

// set db if not already set
config.db = config.db || 'mongodb://localhost/express-mongoose-es6-rest-api-development';

// set http port if not already set
config.HTTP_PORT = config.HTTP_PORT || 3000;

export default config;
