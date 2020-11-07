import { Request } from "express";
import { reset } from './auth'
import debug from '../debug/index'

let resetLog = {
  success(req: Request) {
    reset.info(`用户名:${req.body.username}登陆成功`);
  },
  failure(message: string) {
    reset.info(message);
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
