import { Request, Response } from "express";
import { Info } from "../../Domain/User";
import Login from "../../Service/auth/Login";

export async function login(req: Request, res: Response) {
  const info: Info = req.body;
  const { username } = info;
  let login = new Login(info);
  let validData = login.validInput();
  if (!validData.success) {
    throw {
      prod: true,
      code: 20001,
      message: validData.message,
    };
  }
  let user = await login.findUser();
  if (!user) {
    throw {
      prod: true,
      code: 20002,
      message: `该用户名: ${username}不存在`,
    };
  }
  let isUser = await login.comparePassword();
  if (!isUser) {
    throw {
      prod: true,
      code: 20003,
      message: "密码错误",
    };
  }
  let token = login.signToken();
  res.send({
    code: 20000,
    message: "登陆成功",
    data: {
      token,
    },
  });
}
