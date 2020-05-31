import express from 'express';

import health from './endpoints/health';
import position from './endpoints/position';

const router = express.Router();


router.route('/health').get(health.get);

router.route('/position/receive').post(position.receive);


export default router;