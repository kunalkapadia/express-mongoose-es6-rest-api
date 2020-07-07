const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const usersCtrl = require('./users.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
  .get(usersCtrl.list)

  /** POST /api/users - Create new user */
  .post(validate(paramValidation.createUser), usersCtrl.create);

router.route('/:userId')
  /** GET /api/users/:userId - Get user */
  .get(usersCtrl.get)

  /** PUT /api/users/:userId - Update user */
  .put(validate(paramValidation.updateUser), usersCtrl.update)

  /** DELETE /api/users/:userId - Delete user */
  .delete(usersCtrl.remove);

/** Load user when API with userId route parameter is hit */
router.param('userId', usersCtrl.load);

module.exports = router;
