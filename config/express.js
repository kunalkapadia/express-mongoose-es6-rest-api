import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import cors from 'cors';
import routes from '../server/routes';

const app = express();

app.use(logger('dev'));

// parses body params and attaches them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compress());
app.use(methodOverride());

// Enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use('/api', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//	res.status(err.status || 500);
//	res.render('error', {
//		message: err.message,
//		error: {}
//	});
//});

export default app;
