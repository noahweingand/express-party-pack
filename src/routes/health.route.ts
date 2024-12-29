import { Router } from "express";

import { health } from "../controllers/health.controller";

const router = Router();

router.route("/").get(health);

export default router;
