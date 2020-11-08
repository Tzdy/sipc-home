import { Request } from 'express'
import debug from '../debug/index';
import { authLog } from './auth'
let registerLog = {
  success(req: Request) {
    authLog.log({
      level: 'info',
      label: 'register',
      message: `用户名:${req.body.username}注册成功`,
      ip: req.ip
    })
  },
  failure(req: Request, message: string) {
    authLog.log({
      level: 'info',
      label: 'register',
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

export { registerLog };
