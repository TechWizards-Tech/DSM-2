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
routes.get("/getUserProfile", ProfileController.getUserProfile); // Alterado para GET

// Rota para calcular o peso ideal do usuário com base na altura e gênero
routes.get("/idealWeight", ProfileController.getIdealWeight); // Nova rota adicionada para peso ideal

// Rota para capturar qualquer método ou URL desconhecido
routes.use((_: Request, res: Response) => 
    res.status(404).json({ error: "Operação desconhecida com o perfil" })
);

export default routes;
