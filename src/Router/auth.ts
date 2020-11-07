import { Router, Request, Response, NextFunction } from "express";
import { login, register, getInfo, reset, findBack } from "../Controller/index";
import { resolveError } from "../Utils/error";
import { loginLog, registerLog, getInforLog, findBackLog, resetLog } from '../Utils/log/auth/index'
const route = Router();


route.post("/login", async (req: Request, res: Response) => {
  await resolveError(req, res, login, loginLog);
});

route.post("/register", async (req: Request, res: Response) => {
  await resolveError(req, res, register, registerLog);
});

route.post("/getInfo", async (req: Request, res: Response) => {
  await resolveError(req, res,getInfo, getInforLog);
});

route.post("/auth/findback", async (req: Request, res: Response) => {
  await resolveError(req, res, findBack, findBackLog);
});

route.post("/auth/reset", async (req: Request, res: Response) => {
  await resolveError(req, res, reset, resetLog);
});



export default route;
