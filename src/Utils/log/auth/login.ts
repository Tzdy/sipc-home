import { Request } from "express";
import { login } from './auth'
import debug from '../debug/index'

let loginLog = {
  success(req: Request) {
    login.info(`用户名:${req.body.username}登陆成功`);
  },
  failure(message: string) {
    login.info(message);
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
