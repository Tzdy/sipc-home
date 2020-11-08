import winston from "winston";
import { join } from 'path'
import getGlobal from "../../global";

const { logPath } = getGlobal();

const authLog = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [new winston.transports.File({ filename: join(logPath, 'auth.log') })],
})

export {
    authLog
}