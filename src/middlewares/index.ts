import express, { type Express } from "express";
import helmet from "helmet";

import { useSwagger } from "./docs.middlware";
import useLogger from "./logger.middleware";

export function useMiddlewares(app: Express) {
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(useLogger());
  useSwagger(app);
}
