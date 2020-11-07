import { Request } from "express";
import debug from "../debug/index";
import { getInfo } from './auth'
let getInforLog = {
  success(req: Request) {
    getInfo.info(`用户名:${req.body.$user.username}获取个人信息`);
  },
  failure(message: string) {
    getInfo.error(message);
  },
  error(err: Error) {
    if (err.stack) {
      debug.error(err.stack);
    } else {
      debug.error(err.message);
    }
  }
};

export { getInforLog };
