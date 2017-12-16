'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = new _winston2.default.Logger({
  transports: [new _winston2.default.transports.Console({
    json: true,
    colorize: true
  })]
});

exports.default = logger;
module.exports = exports['default'];
//# sourceMappingURL=winston.js.map
