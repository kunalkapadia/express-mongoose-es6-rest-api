import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';
import { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

describe('## User APIs', () => {
	let user = {
		username: 'KK123',
		mobileNumber: '1234567890'
	};

	describe('# POST /api/users', () => {
		it('should create a new user', (done) => {
			request(app)
				.post('/api/users')
				.send(user)
				.expect(httpStatus.OK)
				.then(res => {
					expect(res.body.username).to.equal(user.username);
					expect(res.body.mobileNumber).to.equal(user.mobileNumber);
					user = res.body;
					done();
				});
		});
	});

	describe('# GET /api/users/:userId', () => {
		it('should get user details', (done) => {
			request(app)
				.get(`/api/users/${user._id}`)
				.expect(httpStatus.OK)
				.then(res => {
					expect(res.body.username).to.equal(user.username);
					expect(res.body.mobileNumber).to.equal(user.mobileNumber);
					done();
				});
		});
	});

	describe('# PUT /api/users/:userId', () => {
		it('should update user details', (done) => {
			user.username = 'KK';
			request(app)
				.put(`/api/users/${user._id}`)
				.send(user)
				.expect(httpStatus.OK)
				.then(res => {
					expect(res.body.username).to.equal('KK');
					expect(res.body.mobileNumber).to.equal(user.mobileNumber);
					done();
				});
		});
	});

	describe('# GET /api/users/', () => {
		it('should get all users', (done) => {
			request(app)
				.get('/api/users')
				.expect(httpStatus.OK)
				.then(res => {
					expect(res.body).to.be.an('array');
					done();
				});
		});
	});

	describe('# DELETE /api/users/', () => {
		it('should delete user', (done) => {
			request(app)
				.delete(`/api/users/${user._id}`)
				.expect(httpStatus.OK)
				.then(res => {
					expect(res.body.username).to.equal('KK');
					expect(res.body.mobileNumber).to.equal(user.mobileNumber);
					done();
				});
		});
	});
});
