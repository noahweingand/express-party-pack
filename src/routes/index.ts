import { Router } from 'express';

import healthRoute from './health.route';

const router = Router();

const routes = [
  {
    path: '/health',
    route: healthRoute,
  },
];

routes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
