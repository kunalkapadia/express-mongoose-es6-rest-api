import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import cors from 'cors';
import httpStatus from 'http-status';
import routes from '../server/routes';
import * as utilityService from '../server/services/utility';

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

// catch different types of error
app.use(function (err, req, res, next) {
	//if (err instanceof expressValidation.ValidationError) {
	//	const completeErrorMessage = _(err.errors).map((error) => {
	//		return error.messages.join('. ');
	//	}).join(' and ');
	//	const error = utilityService.createEnhancedError(completeErrorMessage, err.status);
	//	error.category = 'ParamValidationError';
	//	return next(error);
	//} else if (err instanceof mongoose.Error.ValidationError) {
	//	const completeErrorMessage = _(err.errors).map((value, key) => {
	//		return `${key}: ${value.message}`;
	//	}).join(' and ');
	//	const error = utilityService.createEnhancedError(completeErrorMessage, httpStatus.BAD_REQUEST);
	//	error.category = 'MongooseValidationError';
	//	return next(error);
	//} else {
	const error = utilityService.createError(err.message, err.status, err.isPublic);
	return next(error);
	//}
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	const err = utilityService.createError('API not found', httpStatus.NOT_FOUND);
	return next(err);
});

// error handler
app.use(function(err, req, res, next) {
	return res.status(err.status).json({
		message: err.isPublic ? err.message : httpStatus[err.status],
		error: process.env.NODE_ENV === 'development' ? err : {}
	});
});

export default app;
