import { Router, Request, Response } from "express";
import { UserController } from "../controllers";
import { validadeAcess } from "../middlewares";

import user from "./user";

const routes = Router();

routes.post("/login", UserController.login);
routes.use("/user", user);

//aceita qualquer método HTTP ou URL
routes.use( (_:Request,res:Response) => res.status(404).json({error:"Requisição desconhecida"}) );

export default routes;
