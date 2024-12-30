import { Router } from "express";

import * as operations from "../operations";

const router = Router();

router.get("/health", operations.health);
router.get("/v1/users/:id", operations.getUser);

export default router;
