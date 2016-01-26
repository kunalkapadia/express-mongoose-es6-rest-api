import express from 'express';
import userRoutes from './user';

const router = express.Router();	// eslint-disable-line new-cap

/* GET home page. */
router.get('/health-check', (req, res) =>
	res.send('OK')
);

// mount all routes here
router.use('/users', userRoutes);

export default router;
