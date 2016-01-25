import path from 'path';

// load env variables defined in .env
const config = require('dotenv').config() || {};

// root path of server
config.rootPath = path.join(__dirname, '../');

export default config;
