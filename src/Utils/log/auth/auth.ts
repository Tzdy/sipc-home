import winston from "winston";
import { join } from 'path'
import getGlobal from "../../global";

const { logPath } = getGlobal();
let register = winston.createLogger({
    format: winston.format.combine(
        winston.format.label({ label: 'register' }),
        winston.format.timestamp(),
        winston.format.prettyPrint(),
    ),
    transports: [new winston.transports.File({ filename: join(logPath, 'user.log') })],
})
let login = winston.createLogger({
    format: winston.format.combine(
        winston.format.label({ label: 'login' }),
        winston.format.timestamp(),
        winston.format.prettyPrint(),
    ),
    transports: [new winston.transports.File({ filename: join(logPath, 'user.log') })],
})
let getInfo = winston.createLogger({
    format: winston.format.combine(
        winston.format.label({ label: 'getInfo' }),
        winston.format.timestamp(),
        winston.format.prettyPrint(),
    ),
    transports: [new winston.transports.File({ filename: join(logPath, 'user.log') })],
})
let findBack = winston.createLogger({
    format: winston.format.combine(
        winston.format.label({ label: 'findBack' }),
        winston.format.timestamp(),
        winston.format.prettyPrint(),
    ),
    transports: [new winston.transports.File({ filename: join(logPath, 'user.log') })],
})
let reset = winston.createLogger({
    format: winston.format.combine(
        winston.format.label({ label: 'reset' }),
        winston.format.timestamp(),
        winston.format.prettyPrint(),
    ),
    transports: [new winston.transports.File({ filename: join(logPath, 'user.log') })],
})
export {
    login,
    register,
    getInfo,
    findBack,
    reset
}