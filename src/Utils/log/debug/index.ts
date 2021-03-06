import winston from "winston";
import { join } from "path";
import getGlobal from "../../global";

const { logPath } = getGlobal();

let debug = winston.createLogger({
  format: winston.format.combine(
    winston.format.label({ label: "debug" }),
    winston.format.timestamp(),
    winston.format.prettyPrint()
  ),
  transports: [
    new winston.transports.File({
      filename: join(logPath, "debug.log"),
      maxsize: 1024 * 1024 * 10, // 10mb
    }),
  ],
});

export default debug;
