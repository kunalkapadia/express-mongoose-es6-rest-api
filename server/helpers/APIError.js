import httpStatus from 'http-status';

class ExtendableError extends Error {
	constructor(message, status, isPublic) {
		super(message);
		this.name = this.constructor.name;
		this.message = message;
		this.status = status;
		this.isPublic = isPublic;
		this.isOperational = true;
		Error.captureStackTrace(this, this.constructor.name);
	}
}

class APIError extends ExtendableError {
	constructor(message, status = httpStatus.INTERNAL_SERVER_ERROR, isPublic = false) {
		super(message, status, isPublic);
	}
}

export default APIError;
