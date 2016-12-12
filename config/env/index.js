import path from 'path';
import dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `./.env.${env}` }); // eslint-disable-line import/no-dynamic-require

const defaults = {
  root: path.join(__dirname, '/..')
};

export default Object.assign(defaults);
