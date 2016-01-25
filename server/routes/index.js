import express from 'express';
import userRoutes from './users';

const router = express.Router();	// eslint-disable-line new-cap

/* GET home page. */
router.get('/health-check', (req, res) =>
	res.send('OK')
);

router.use('/users', userRoutes);

export default router;
