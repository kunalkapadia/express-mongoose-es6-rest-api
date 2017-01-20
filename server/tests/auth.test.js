import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import chai, { expect } from 'chai';
import app from '../../index';

const config = require('../../config/env');
const should = require('chai').should();

chai.config.includeStack = true;

describe('## AUTH APIs', () => {
  const user = {
    username: 'react',
    password: 'express'
  };
  let jwtToken;

  describe('# GET /api/auth/login', () => {
    it('should get (valid) JWT token', (done) => {
      request(app)
        .post('/api/auth/login')
        .send(user)
        .expect(httpStatus.OK)
        .then((res) => {
          should.exist(res.body.token);
          jwt.verify(res.body.token, config.jwtSecret, (err, decoded) => {
            should.not.exist(err);
            expect(decoded.username).to.equal(user.username);
            jwtToken = `Bearer ${res.body.token}`;
            done();
          });
        })
        .catch(done);
    });
  });

  describe('# GET /api/auth/random-number', () => {
    it('should fail to get random number because of missing Authorization', (done) => {
      request(app)
        .get('/api/auth/random-number')
        .expect(httpStatus.UNAUTHORIZED)
        .then((res) => {
          expect(res.body.message).to.equal('Unauthorized');
          done();
        })
        .catch(done);
    });

    it('should get a random number', (done) => {
      request(app)
        .get('/api/auth/random-number')
        .set('Authorization', jwtToken)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.num).to.be.a('number');
          done();
        })
        .catch(done);
    });
  });
});
