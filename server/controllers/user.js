import { User } from '../models';

export function get(req, res, next, id) {
	User.get(id).then((user) => {
		req.user = user;		// eslint-disable-line no-param-reassign
		return next();
	}).error((e) => next(e));
}

export function getById(req, res) {
	return res.json(req.user);
}

export function create(req, res, next) {
	const user = new User({
		username: req.body.username,
		mobileNumber: req.body.mobileNumber
	});

	user.saveAsync()
		.then((savedUser) => res.json(savedUser))
		.error((e) => next(e));
}

export function update(req, res, next) {
	const user = req.user;
	user.username = req.body.username;
	user.mobileNumber = req.body.mobileNumber;

	user.saveAsync()
		.then((savedUser) => res.json(savedUser))
		.error((e) => next(e));
}

export function list(req, res, next) {
	User.list().then((users) =>	res.json(users))
		.error((e) => next(e));
}

export function remove(req, res, next) {
	const user = req.user;
	user.removeAsync()
		.then((deletedUser) => res.json(deletedUser))
		.error((e) => next(e));
}
