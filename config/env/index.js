import path from 'path';
import _ from 'lodash';

const env = process.env.NODE_ENV || 'development',
	config = require(`./${env}`);

const defaults = {
	root: path.join(__dirname, '/..')
};

_.assign(config, defaults);

export default config;
