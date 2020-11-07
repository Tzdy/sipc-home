import { Request, Response } from "express";

export async function getInfo(req: Request, res: Response) {
  res.send({
    code: 20000,
    message: "查询个人信息成功",
    data: req.body.$user,
  });
}
