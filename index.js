const app = require('./config/express'),
	debug = require('debug')('express-es6-rest-api-starter:index');

app.listen(3000, () => {
	debug(`server started on port ${process.env.HTTP_PORT} in ${process.env.NODE_ENV} env`);
});