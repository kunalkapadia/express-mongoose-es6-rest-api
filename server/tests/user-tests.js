import request from 'supertest';
import httpStatus from 'http-status';
import chai from 'chai';
import { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

describe('User APIs', () => {
	let user = {
		username: 'KK123',
		mobileNumber: '1234567890'
	};

	describe('POST /api/users', () => {
		it('should create a new user', (done) => {
			request(app)
				.post('/api/users')
				.send(user)
				.end((err, res) => {
					expect(err).to.not.exist; // eslint-disable-line no-unused-expressions
					expect(res.statusCode).to.equal(httpStatus.OK);
					expect(res.body.username).to.equal(user.username);
					expect(res.body.mobileNumber).to.equal(user.mobileNumber);
					user = res.body;
					done();
				});
		});
	});
});
