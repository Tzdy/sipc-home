import { Request, Response } from "express";
import FindBack from "../../Service/auth/FindBack";

export async function findBack(req: Request, res: Response) {
  const { email: isEmail } = req.query;
  const { username, email } = req.body;
  if (isEmail === "true") {
    const findBackByEmail = new FindBack({
      username,
      email,
    });
    const validData = findBackByEmail.validInput();
    if (!validData.success) {
      throw {
        prod: true,
        message: validData.message,
        code: 20002,
      };
    }
    const checkInfoValid = findBackByEmail.checkInfoValid();
    if (!checkInfoValid) {
      throw {
        prod: true,
        code: 20001,
        message: "账号与邮箱不匹配",
      };
    }
    await findBackByEmail.sendEmail();
    res.send({
      code: 20000,
      message: "稍后会将重置密码的链接，发送至您的邮箱",
    });
  }
}
