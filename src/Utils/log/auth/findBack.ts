import { Request } from "express";
import debug from "../debug/index";
import { authLog } from './auth'
let findBackLog = {
  success(req: Request) {
    authLog.log({
      level: 'info',
      label: 'findback',
      message: `用户名:${req.body.username}获取修改密码邮件成功`,
      ip: req.ip
    })
  },
  failure(req: Request, message: string) {
    authLog.log({
      level: 'info',
      label: 'findback',
      message,
      ip: req.ip
    })
  },
  error(err: Error) {
    if (err.stack) {
      debug.error(err.stack);
    } else {
      debug.error(err.message);
    }
  }
};

export { findBackLog };