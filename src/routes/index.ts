import { Router } from "express";

import healthRoute from "./health.route";

const router = Router();

const routes = [
  {
    path: "/health",
    route: healthRoute
  }
];

for (const { path, route } of routes) {
  router.use(path, route);
}

export default router;
