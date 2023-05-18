import { Router } from 'express';

import { InvoicesController } from '../controllers';

const router = Router();

router.route('/').get(InvoicesController);

export default router;
