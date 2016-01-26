import Promise from 'bluebird';
import mongoose from 'mongoose';
import config from './config/env';
import app from './config/express';

// promisify mongoose
Promise.promisifyAll(mongoose);

// connect to mongo db
mongoose.connect(config.db, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database: ${config.db}`);
});

const debug = require('debug')('express-mongoose-es6-rest-api:index');

// listen on port HTTP_PORT
app.listen(config.HTTP_PORT, () => {
	debug(`started server on port ${config.HTTP_PORT} (${config.NODE_ENV})`);
});

export default app;
