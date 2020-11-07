import { Request, Response, NextFunction } from "express";
import { verify } from "../Utils/jwt";
import { findUserByUsername } from "../Domain/User";
import { authLog } from '../Utils/log/middleware/auth'
export async function auth(req: Request, res: Response, next: NextFunction) {
  try {
    let token = req.headers.authorization;
    let verifyData;
    if (!token) {
      throw {
        code: 20008,
        message: '登陆信息异常'
      }
    }
    verifyData = <{ username: string; date: number }>verify(token);
    const { username, date } = verifyData;
    if (!username) {
      throw {
        code: 20008,
        message: '登陆信息异常'
      }
    }
    //大于一天86400000
    if (Date.now() - date > 86400000) {
      throw {
        code: 20009,
        message: '登陆信息过期，请重新登陆'
      }
    }
    let userData = await findUserByUsername(username);
    if (!userData) {
      throw {
        code: 20008,
        message: '登陆信息异常'
      }
    }
    req.body.$user = userData.get();
    authLog.success(req)
    next()
  } catch(err) {
    res.send(err)
    authLog.failure(err.message)
  }
}
