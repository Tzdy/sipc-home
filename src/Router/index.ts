import { Application, ErrorRequestHandler, Request, Response, NextFunction } from "express";
import getGlobal from "../Utils/global";
import AuthRoute from "./auth";

const { baseUrl } = getGlobal();

export default function router(app: Application) {
    app.use(baseUrl, AuthRoute);
}
