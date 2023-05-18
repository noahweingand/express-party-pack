import express from 'express';

import { name, port } from './config/server.config';
import { log } from './config';
import { useMiddlewares } from './middlewares';
import routes from './routes';

const app = express();

useMiddlewares(app);
app.use(routes);

app.listen(port, () => {
  log().info(`${name} listening on port ${port}`);
});
