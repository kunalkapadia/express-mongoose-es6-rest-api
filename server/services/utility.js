import httpStatus from 'http-status';

export function createError(message, status = httpStatus.INTERNAL_SERVER_ERROR, isPublic = false) {
	const error = new Error(message);
	error.status = status;
	error.isPublic = isPublic;
	error.isOperational = true;
	return error;
}
