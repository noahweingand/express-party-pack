import express from 'express';

import { log, name, port } from './config';
import { useMiddlewares } from './middlewares';
import routes from './routes';

const app = express();

useMiddlewares(app);
app.use(routes);

app.listen(port, () => {
  log().info(`${name} listening on port ${port}`);
});
