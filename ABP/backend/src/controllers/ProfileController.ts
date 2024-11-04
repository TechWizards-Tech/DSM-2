import { Request, Response } from "express";
import { query } from "../database/connection";

class ProfileController {
  public async list(_: Request, res: Response): Promise<void> {
    const { id } = res.locals;
    try {
      const result: any = await query(
        `SELECT age, weight, height_cm, objective, activity_level, diet_type, gender 
         FROM profiles 
         WHERE _user=$1`,
        [id]
      );

      res.json(result);
    } catch (e: any) {
      res.status(502).json({ error: e.message });
    }
  }

  public async save(req: Request, res: Response): Promise<void> {
    const { age, weight, height_cm, objective, activity_level, diet_type, gender, userId } = req.body; // Agora incluímos userId no corpo da requisição
    console.log(userId); // ID do usuário a partir do front-end
    console.log(req.body);
    
    // Validações dos dados recebidos
    if (age === undefined || isNaN(age) || age < 0) {
        res.json({ error: "Forneça uma idade válida em anos" });
        return; // Adiciona retorno para evitar execução contínua
    } else if (!weight) {
        res.json({ error: "Forneça o seu peso" });
        return;
    } else if (!height_cm) {
        res.json({ error: "Forneça a sua altura em centímetros" });
        return;
    } else if (objective === undefined) {
        res.json({ error: "Forneça o objetivo" });
        return;
    } else if (activity_level === undefined) {
        res.json({ error: "Forneça o nível de atividade" });
        return;
    } else if (diet_type === undefined) {
        res.json({ error: "Forneça o tipo de dieta" });
        return;
    } else if (!gender || (gender !== "female" && gender !== "male")) {
        res.json({ error: "Forneça o gênero (feminino ou masculino)" });
        return;
    }

    try {
        // Verifica se o usuário já possui um perfil cadastrado
        const queryProfile: any = await query(
            "SELECT _user FROM profiles WHERE _user=$1",
            [userId] // Usando userId do corpo da requisição
        );

        if (queryProfile.length === 0) {
            // Cria um novo perfil
            const result: any = await query(
                `INSERT INTO profiles(_user, age, weight, height_cm, objective, activity_level, diet_type, gender) 
                 VALUES($1, $2, $3, $4, $5, $6, $7, $8)
                 RETURNING _user, age, weight, height_cm, objective, activity_level, diet_type, gender`,
                [userId, age, weight, height_cm, objective, activity_level, diet_type, gender] // Usando userId
            );
            res.json(result);
        } else {
            // Atualiza o perfil existente
            const result: any = await query(
                `UPDATE profiles 
                 SET age = $1, weight = $2, height_cm = $3, objective = $4, activity_level = $5, diet_type = $6, gender = $7 
                 WHERE _user = $8
                 RETURNING _user, age, weight, height_cm, objective, activity_level, diet_type, gender`,
                [age, weight, height_cm, objective, activity_level, diet_type, gender, userId] // Usando userId
            );
            res.json(result.rows.length ? result.rows : result);
        }
    } catch (e: any) {
        res.status(502).json({ error: e.message });
    }
}



  public async update(req: Request, res: Response): Promise<void> {
    const { age, weight, height_cm, gender, objective, activity_level, diet_type } = req.body;
    const { id: userId } = res.locals;

    // Construindo uma lista dinâmica de campos a atualizar
    const fields: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (age !== undefined) {
        fields.push(`age=$${paramIndex++}`);
        values.push(age);
    }
    if (weight !== undefined) {
        fields.push(`weight=$${paramIndex++}`);
        values.push(weight);
    }
    if (height_cm !== undefined) {
        fields.push(`height_cm=$${paramIndex++}`);
        values.push(height_cm);
    }
    if (gender !== undefined) {
        if (gender === "female" || gender === "male") {
            fields.push(`gender=$${paramIndex++}`);
            values.push(gender);
        } else {
            res.json({ error: "Forneça um gênero válido (female ou male)" });
            return;
        }
    }
    if (objective !== undefined) {
        if (objective >= 0 && objective <= 2) {
            fields.push(`objective=$${paramIndex++}`);
            values.push(objective);
        } else {
            res.json({ error: "Forneça um objetivo válido (0, 1 ou 2)" });
            return;
        }
    }
    if (activity_level !== undefined) {
        if (activity_level >= 0 && activity_level <= 2) {
            fields.push(`activity_level=$${paramIndex++}`);
            values.push(activity_level);
        } else {
            res.json({ error: "Forneça um nível de atividade física válido (0, 1 ou 2)" });
            return;
        }
    }
    if (diet_type !== undefined) {
        if (diet_type >= 0 && diet_type <= 2) {
            fields.push(`diet_type=$${paramIndex++}`);
            values.push(diet_type);
        } else {
            res.json({ error: "Forneça um tipo de dieta válido (0, 1 ou 2)" });
            return;
        }
    }

    // Verifica se há campos para atualizar
    if (fields.length === 0) {
        res.json({ error: "Nenhum campo fornecido para atualização" });
        return;
    }

    // Adiciona o ID do usuário como último parâmetro para o WHERE
    values.push(userId);

    try {
        const result: any = await query(
            `UPDATE profiles 
             SET ${fields.join(", ")}
             WHERE _user=$${paramIndex}
             RETURNING age, weight, height_cm, gender, objective, activity_level, diet_type`,
            values
        );

        res.json(result);
    } catch (e: any) {
        res.status(502).json({ error: e.message });
    }
}


  public async delete(_: Request, res: Response): Promise<void> {
    const { id } = res.locals;

    try {
      const result: any = await query(
        `DELETE FROM profiles WHERE _user = $1 
        RETURNING TO_CHAR(birth_date, 'YYYY-MM-DD') AS birth_date, weight, sex`,
        [id]
      );
      if (result.rowcount > 0) {
        res.json(result.rows);
      } else if (result.rowcount === 0) {
        res.json({ error: "Não existe perfil cadastrado" });
      } else {
        res.json(result);
      }
    } catch (e: any) {
      res.status(502).json({ error: e.message });
    }
  }
}

const controller = new ProfileController();
export default controller;
