import { Router, Request, Response } from "express";
import {EatFoodController as controller} from "../controllers";

const routes = Router();

routes.post("/list", controller.list); //lista de alimentos por periodo
routes.post("/period", controller.periodsum); // soma de calorias por periodo
routes.post("/daily", controller.dailysum); // soma de calorias diaria
routes.post("/", controller.create);
routes.put("/", controller.update);
routes.post("/delete", controller.delete);

//aceita qualquer método HTTP ou URL
routes.use( (_:Request,res:Response) => res.status(404).json({error:"Operação desconhecida com o consumo de alimentos"}) );

export default routes;