import { Router } from 'express';

import healthRoute from './health.route';
import invoicesRoutes from './invoices.route';

const router = Router();

const routes = [
  {
    path: '/health',
    route: healthRoute,
  },
  {
    path: '/invoices',
    route: invoicesRoutes,
  },
];

routes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
