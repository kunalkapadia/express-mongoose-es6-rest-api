import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import * as utilityService from '../services/utility';

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	mobileNumber: {
		type: String,
		required: true,
		match: [/^[1-9][0-9]{9}$/, 'The value of path {PATH} ({VALUE}) is not a valid mobile number.']
	}
});

UserSchema.statics = {
	get(id) {
		return this.findById(id)
			.execAsync().then((user) => {
				if (user) {
					return user;
				}
				const err = utilityService.createError('No such user exists!', httpStatus.NOT_FOUND);
				return Promise.reject(err);
			});
	},

	list() {
		return this.find()
			.execAsync();
	}
};

export default mongoose.model('User', UserSchema);
