'use strict';

var _supertestAsPromised = require('supertest-as-promised');

var _supertestAsPromised2 = _interopRequireDefault(_supertestAsPromised);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _index = require('../../index');

var _index2 = _interopRequireDefault(_index);

var _config = require('../../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.config.includeStack = true;

describe('## Auth APIs', function () {
  var validUserCredentials = {
    username: 'react',
    password: 'express'
  };

  var invalidUserCredentials = {
    username: 'react',
    password: 'IDontKnow'
  };

  var jwtToken = void 0;

  describe('# POST /api/auth/login', function () {
    it('should return Authentication error', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/auth/login').send(invalidUserCredentials).expect(_httpStatus2.default.UNAUTHORIZED).then(function (res) {
        (0, _chai.expect)(res.body.message).to.equal('Authentication error');
        done();
      }).catch(done);
    });

    it('should get valid JWT token', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/auth/login').send(validUserCredentials).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body).to.have.property('token');
        _jsonwebtoken2.default.verify(res.body.token, _config2.default.jwtSecret, function (err, decoded) {
          (0, _chai.expect)(err).to.not.be.ok; // eslint-disable-line no-unused-expressions
          (0, _chai.expect)(decoded.username).to.equal(validUserCredentials.username);
          jwtToken = 'Bearer ' + res.body.token;
          done();
        });
      }).catch(done);
    });
  });

  describe('# GET /api/auth/random-number', function () {
    it('should fail to get random number because of missing Authorization', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/auth/random-number').expect(_httpStatus2.default.UNAUTHORIZED).then(function (res) {
        (0, _chai.expect)(res.body.message).to.equal('Unauthorized');
        done();
      }).catch(done);
    });

    it('should fail to get random number because of wrong token', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/auth/random-number').set('Authorization', 'Bearer inValidToken').expect(_httpStatus2.default.UNAUTHORIZED).then(function (res) {
        (0, _chai.expect)(res.body.message).to.equal('Unauthorized');
        done();
      }).catch(done);
    });

    it('should get a random number', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/auth/random-number').set('Authorization', jwtToken).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body.num).to.be.a('number');
        done();
      }).catch(done);
    });
  });
});
//# sourceMappingURL=auth.test.js.map
