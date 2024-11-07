import { Router, Request, Response } from "express";
import ProfileController from "../controllers/ProfileController";

const routes = Router();

// Rota para listar o perfil
routes.get("/", ProfileController.list);

// Rota para criar ou salvar um novo perfil
routes.post("/", ProfileController.save);

// Rota para atualizar o perfil existente
routes.put("/", ProfileController.update);

// Rota para deletar o perfil
routes.delete("/", ProfileController.delete);

// Rota para buscar alias e mail do usuário, junto com age, weight, height_cm do perfil
routes.get("/getUserProfile", ProfileController.getUserProfile);

// Rota para calcular o peso ideal do usuário com base na altura e gênero
routes.get("/idealWeight", ProfileController.getIdealWeight);

// Rota para calcular a TMB (Taxa Metabólica Basal)
routes.get("/calculateBMR", ProfileController.calculateBMR); // Nova rota para calcular a TMB

// Rota para obter uma dica aleatória
routes.get("/randomTip", ProfileController.getRandomTip);

// Rota para capturar qualquer método ou URL desconhecido
routes.use((_: Request, res: Response) => 
    res.status(404).json({ error: "Operação desconhecida com o perfil" })
);

export default routes;
