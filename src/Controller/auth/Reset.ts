import { Request, Response } from "express";
import ResetService from '../../Service/auth/Reset'


export async function reset(req: Request, res: Response) {
  const { password: isPassword } = req.query;
  const { key, password } = req.body;
  if (isPassword) {
    let reset = new ResetService(
      {
        password,
      },
      key
    );

    const inputValid = reset.validInput();
    if (!inputValid.success) {
      throw {
        code: 20002,
        message: "重置失败",
      };
    }

    const keyValid = reset.validKey();
    if (!keyValid) {
      throw {
        code: 20002,
        message: "重置失败",
      };
    }

    const dateValid = reset.validDate();
    if (!dateValid) {
      throw {
        code: 20001,
        message: "该密码找回邮件已超过时间限制",
      };
    }

    const userValid = await reset.validUser();
    if (!userValid) {
      throw {
        code: 20002,
        message: "重置失败",
      };
    }

    const resetSuccess = await reset.resetPassword();
    if (!resetSuccess) {
      throw {
        code: 20002,
        message: "重置失败",
      };
    }

    res.send({
      code: 20000,
      message: "密码重置成功",
    });
  }
}
