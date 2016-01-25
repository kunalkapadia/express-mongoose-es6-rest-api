import config from './config/env';
import app from './config/express';

const debug = require('debug')('express-es6-rest-api-starter:index');

// listen on port HTTP_PORT
app.listen(config.HTTP_PORT, () => {
	debug(`started server on port ${config.HTTP_PORT} (${config.NODE_ENV})`);
});
