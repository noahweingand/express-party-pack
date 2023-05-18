import express, { type Express } from 'express';
import helmet from 'helmet';

import useLogger from './logger.middleware';

export function useMiddlewares(app: Express) {
  app.use(helmet()); // set security HTTP headers
  app.use(express.json()); // parse json request body
  app.use(express.urlencoded({ extended: true })); // parse urlencoded request body
  app.use(useLogger());
}
