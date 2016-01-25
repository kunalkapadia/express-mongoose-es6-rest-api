import express from 'express';

const router = express.Router();	// eslint-disable-line new-cap

/* GET users listing. */
router.get('/', (req, res) =>
  res.send('respond with a resource')
);

export default router;
