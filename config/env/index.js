import path from 'path';

const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`);

const defaults = {
  root: path.join(__dirname, '/..')
};

export default Object.assign(defaults, config);
