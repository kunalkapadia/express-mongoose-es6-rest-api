'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _supertestAsPromised = require('supertest-as-promised');

var _supertestAsPromised2 = _interopRequireDefault(_supertestAsPromised);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _index = require('../../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.config.includeStack = true;

/**
 * root level hooks
 */
after(function (done) {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  _mongoose2.default.models = {};
  _mongoose2.default.modelSchemas = {};
  _mongoose2.default.connection.close();
  done();
});

describe('## User APIs', function () {
  var user = {
    username: 'KK123',
    mobileNumber: '1234567890'
  };

  describe('# POST /api/users', function () {
    it('should create a new user', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/users').send(user).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body.username).to.equal(user.username);
        (0, _chai.expect)(res.body.mobileNumber).to.equal(user.mobileNumber);
        user = res.body;
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/users/:userId', function () {
    it('should get user details', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/users/' + user._id).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body.username).to.equal(user.username);
        (0, _chai.expect)(res.body.mobileNumber).to.equal(user.mobileNumber);
        done();
      }).catch(done);
    });

    it('should report error with message - Not found, when user does not exists', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/users/56c787ccc67fc16ccc1a5e92').expect(_httpStatus2.default.NOT_FOUND).then(function (res) {
        (0, _chai.expect)(res.body.message).to.equal('Not Found');
        done();
      }).catch(done);
    });
  });

  describe('# PUT /api/users/:userId', function () {
    it('should update user details', function (done) {
      user.username = 'KK';
      (0, _supertestAsPromised2.default)(_index2.default).put('/api/users/' + user._id).send(user).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body.username).to.equal('KK');
        (0, _chai.expect)(res.body.mobileNumber).to.equal(user.mobileNumber);
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/users/', function () {
    it('should get all users', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/users').expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body).to.be.an('array');
        done();
      }).catch(done);
    });

    it('should get all users (with limit and skip)', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/users').query({ limit: 10, skip: 1 }).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body).to.be.an('array');
        done();
      }).catch(done);
    });
  });

  describe('# DELETE /api/users/', function () {
    it('should delete user', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).delete('/api/users/' + user._id).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body.username).to.equal('KK');
        (0, _chai.expect)(res.body.mobileNumber).to.equal(user.mobileNumber);
        done();
      }).catch(done);
    });
  });
});
//# sourceMappingURL=user.test.js.map
