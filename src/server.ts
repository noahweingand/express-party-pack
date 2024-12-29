import express from 'express';

import { APP_NAME, log, PORT } from './config';
import { useMiddlewares } from './middlewares';
import routes from './routes';

const app = express();

useMiddlewares(app);
app.use(routes);

app.listen(PORT, () => {
  log().info(`${APP_NAME} listening on port ${PORT}`);
});
