import { Request } from 'express'
import debug from '../debug/index';
import { register } from './auth'
let registerLog = {
  success(req: Request) {
    register.info(`用户名:${req.body.username}注册成功`);
  },
  failure(message: string) {
    register.error(message);
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
