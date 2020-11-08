import { Request, Response } from "express";

export type DiyError = {
    prod: boolean
    errorMessage: any
}

export async function resolveError(req: Request, res: Response, resolve: Function, log: any) {
    try {
        await resolve(req, res);
        log.success(req);
      } catch(err) {
        if (err.prod) {
          log.failure(req, err.message);
          res.send(err)
        } else {
          log.error(err);
          res.status(500).send({
            message: '服务器内部错误',
            code: -1
          })
        }
      }
}