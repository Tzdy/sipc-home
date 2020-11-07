import { Request } from "express";
import debug from "../debug/index";
import { findBack } from './auth'
let findBackLog = {
  success(req: Request) {
    findBack.info(`用户名:${req.body.username}获取修改密码邮件成功`);
  },
  failure(message: string) {
    findBack.error(message);
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