import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import { query } from "../database/connection";
import { tokenize } from "../middlewares"; // Função para gerar tokens

class AuthController {
  private saltRounds = 10;

  public async register(req: Request, res: Response): Promise<void> {
    const { alias, mail, password } = req.body;
    console.log(alias, mail, password)

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await query(
        "INSERT INTO users (alias, mail, password) VALUES ($1, $2, $3) RETURNING id, alias, mail",
        [alias, mail, hashedPassword]
      );
      res.status(201).json({ user: result.rows[0] });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Erro ao cadastrar usuário" });
    }
  }

  public async login(req: Request, res: Response): Promise<void> {
    const { mail, password } = req.body;

    try {
      const result = await query("SELECT * FROM users WHERE mail = $1", [mail]);
      console.log(result)
      if (result.length === 0) {
        res.status(401).json({ error: "Credenciais inválidas" });
        console.log(result)
        return;
      }

      const user = result[0];
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        res.status(401).json({ error: "Credenciais inválidas" });
        return;
      }

      res.json({ user, token: tokenize(user) });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Erro ao efetuar login" });
    }
  }
}

export default new AuthController();
