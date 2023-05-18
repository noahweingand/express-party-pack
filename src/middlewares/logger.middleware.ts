import pinoHttp from 'pino-http';

import { getLogOptions } from '../config/logger.config';
import { name as serverName } from '../config/server.config';

function useLogger() {
  return pinoHttp(getLogOptions(serverName as string));
}

export default useLogger;
