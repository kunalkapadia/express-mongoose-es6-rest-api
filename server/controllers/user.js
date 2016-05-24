import User from '../models/user';

/**
 * Load user and append to req.
 * @param {object} req - Request.
 * @param {object} res - Response.
 * @param {object} next - Next Middleware.
 * @param {string} id - User id.
 * @return {object} - User Objects
 */
function load(req, res, next, id) {
	User.get(id).then((user) => {
		req.user = user;		// eslint-disable-line no-param-reassign
		return next();
	}).error((e) => next(e));
}

/**
 * Get user
 * @param {object} req - Request.
 * @param {object} res - Response.
 * @return {object} - User Objects
 */
function get(req, res) {
	return res.json(req.user);
}

/**
 * Create new user
 * @param {object} req - Request.
 * @param {object} res - Response.
 * @param {object} next - Next Middleware.
 * @return {User} - User's Object
 */
function create(req, res, next) {
	const user = new User({
		username: req.body.username,
		mobileNumber: req.body.mobileNumber
	});

	user.saveAsync()
		.then((savedUser) => res.json(savedUser))
		.error((e) => next(e));
}

/**
 * Update existing user
 * @param {object} req - Request.
 * @param {object} res - Response.
 * @param {object} next - Next Middleware.
 * @return {User} - User's Object
 */
function update(req, res, next) {
	const user = req.user;
	user.username = req.body.username;
	user.mobileNumber = req.body.mobileNumber;

	user.saveAsync()
		.then((savedUser) => res.json(savedUser))
		.error((e) => next(e));
}

/**
 * Get user list.
 * @param {object} req - Request.
 * @param {object} res - Response.
 * @param {object} next - Next Middleware.
 * @return {User[]} - List of User's Objects
 */
function list(req, res, next) {
	const { limit = 50, skip = 0 } = req.query;
	User.list({ limit, skip }).then((users) =>	res.json(users))
		.error((e) => next(e));
}

/**
 * Delete user.
 * @param {object} req - Request.
 * @param {object} res - Response.
 * @param {object} next - Next Middleware.
 * @return {User} - User Object
 */
function remove(req, res, next) {
	const user = req.user;
	user.removeAsync()
		.then((deletedUser) => res.json(deletedUser))
		.error((e) => next(e));
}

export default { load, get, create, update, list, remove };
