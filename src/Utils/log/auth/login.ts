import { Request } from "express";
import { authLog } from './auth'
import debug from '../debug/index'

let loginLog = {
  success(req: Request) {
    authLog.log({
      level: 'info',
      label: 'login',
      message: `${req.body.username}登陆成功`,
      ip: req.ip
    })
  },
  failure(req: Request, message: string) {
    authLog.log({
      level: 'info',
      label: 'login',
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

export { loginLog };
