import pinoHttp from 'pino-http';

import { getLogOptions } from '../config/logger.config';
import { APP_NAME } from '../config/server.config';

function useLogger() {
  return pinoHttp(getLogOptions(APP_NAME));
}

export default useLogger;
