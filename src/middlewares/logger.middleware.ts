import pinoHttp from "pino-http";

import { getLogOptions } from "../config/logger.config";
import { APP_NAME } from "../config/server.config";

function useLogger() {
  return pinoHttp({
    ...getLogOptions(APP_NAME),
    customLogLevel: (_req, res, err) => {
      if (res.statusCode >= 500 || err) return "error";
      if (res.statusCode >= 400 && res.statusCode < 500) return "warn";
      return "info";
    },
    customSuccessMessage: (req, res, responseTime) =>
      `${req.method} ${req.url} - ${res.statusCode} (${responseTime}ms)`,
    customErrorMessage: (req, _res, err) => `${req.method} ${req.url} - [${err.name}] ${err.message}`,
    serializers: {
      req: (req) => ({
        method: req?.method,
        url: req?.url,
        ...(req?.query && { query: req.query }),
        ...(req?.params && { params: req.params }),
        ...(req?.body && { body: req.body })
      }),
      res: (res) => ({ statusCode: res?.statusCode })
    }
  });
}

export default useLogger;
