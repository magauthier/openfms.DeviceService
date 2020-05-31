import express from 'express';

import health from './endpoints/health';

import device from './endpoints/device';
import position from './endpoints/position';

const router = express.Router();


router.route('/health').get(health.get);

router.route('/device/get').get(device.get);
router.route('/device/add').post(device.add);
router.route('/device/clearAll').get(device.clearAll);

router.route('/position/receive').post(position.receive);


export default router;