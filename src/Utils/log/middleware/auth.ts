import winston from "winston";
import { Request } from "express";
let auth = winston.createLogger({
  format: winston.format.combine(
    winston.format.label({ label: "auth" }),
    winston.format.timestamp(),
    winston.format.prettyPrint()
  ),
  transports: [new winston.transports.File({ filename: "user.log" })],
});
let authLog = {
  success(req: Request) {
    auth.info(`用户名:${req.body.$user.username}获取登陆信息成功`);
  },
  failure(message: string) {
    auth.error(message);
  },
};
export { authLog }