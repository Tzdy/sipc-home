import winston from "winston";
import { join } from "path";
import getGlobal from "../../global";

const { logPath } = getGlobal();

const authLog = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({
      filename: join(logPath, "auth.log"),
      maxsize: 1024 * 1024 * 10, // 10mb
    }),
  ],
});

export { authLog };
