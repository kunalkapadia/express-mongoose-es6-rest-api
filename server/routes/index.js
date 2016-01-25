import express from 'express';
import userRoutes from './users';

const router = express.Router();

/* GET home page. */
router.get('/health-check', function(req, res, next) {
	return res.send('OK');
});

router.use('/users', userRoutes);

export default router;
