import Pino from "pino";

import { APP_NAME } from "./server.config";

export function getLogOptions(name: string) {
  return {
    name,
    messageKey: "data",
    formatters: {
      level(label: string) {
        // Override log level number to be label instead
        return { level: label };
      }
    },
    base: undefined // Adds PID and Hostname to logs by default
  };
}

let pinoLogger: Pino.BaseLogger | undefined;

export function logger() {
  if (!pinoLogger) {
    return Pino(getLogOptions(APP_NAME));
  }

  return pinoLogger;
}

export const log = () => logger();
