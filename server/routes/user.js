import express from 'express';
import * as userCtrl from '../controllers/user';

const router = express.Router();	// eslint-disable-line new-cap

router.route('/')
	.get(userCtrl.list)
	.post(userCtrl.create);

router.route('/:userId')
	.get(userCtrl.getById)
	.put(userCtrl.update)
	.delete(userCtrl.remove);

router.param('userId', userCtrl.get);

export default router;
