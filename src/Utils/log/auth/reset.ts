import { Request } from "express";
import { authLog } from './auth'
import debug from '../debug/index'

let resetLog = {
  success(req: Request) {
    authLog.log({
      level: 'info',
      label: 'reset',
      message: `用户id:${req.body.$id}重置密码成功`,
      ip: req.ip
    })
  },
  failure(req: Request, message: string) {
    authLog.log({
      level: 'info',
      label: 'reset',
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

export { resetLog };
