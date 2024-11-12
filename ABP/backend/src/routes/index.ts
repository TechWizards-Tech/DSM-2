import { Router, Request, Response } from "express";
import { UserController } from "../controllers";
import { validadeAcess } from "../middlewares";
import food from "./food";
import profile from "./profile";
import user from "./user";
import eatFood from "./eatFood";

const routes = Router();

routes.post("/login", UserController.login);
routes.use("/food", food);
routes.use("/eat/food", validadeAcess, eatFood);
routes.use("/profile", validadeAcess, profile); // Protege as rotas de perfil com validadeAcess
routes.use("/user", user);

// Captura qualquer método HTTP ou URL desconhecido
routes.use((_: Request, res: Response) => res.status(404).json({ error: "Requisição desconhecida" }));

export default routes;
