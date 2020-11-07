import { Response, Request } from "express";
import { Info } from "../../Domain/User";
import Register from "../../Service/auth/Register";

export async function register(req: Request, res: Response) {
  const info: Info = req.body;
  const { username } = info;
  let register = new Register(info);
  let validData = register.validInput();
  if (!validData.success) {
    throw {
      message: validData.message,
      code: 20001,
    };
  }
  let hasAccount = await register.hasAccount();
  if (hasAccount) {
    throw {
      message: `账号:${username}已存在`,
      code: 20002,
    };
  }
  await register.createAccount();
  res.send({
    code: 20000,
    message: "注册成功",
  });
}
