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
    const {id: userId} = res.locals;
    const { age, weight, height_cm, objective, activity_level, diet_type, gender } = req.body; // Agora incluímos userId no corpo da requisição
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

public async getUserProfile(req: Request, res: Response): Promise<void> {
    const { id: userId } = res.locals; // Obtém userId de res.locals
    console.log("userId recebido:", userId); // Log para verificar o userId

    try {
        const result = await query(
            `
            SELECT u.alias, u.mail, p.age, p.weight, p.height_cm
            FROM users u
            INNER JOIN profiles p ON p._user = u.id
            WHERE u.id = $1
            `,
            [userId]
        );

        // Log para verificar o resultado da consulta
        console.log("Resultado da consulta:", result);

        // Acessando o resultado corretamente
        if (!result || !Array.isArray(result) || result.length === 0) {
            res.status(404).json({ error: "Usuário não encontrado" });
            return;
        }

        // Retorna os dados do usuário e do perfil
        const { alias, mail, age, weight, height_cm } = result[0]; // Acessa o primeiro registro diretamente
        res.json({ alias, mail, age, weight, height_cm });
    } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        res.status(500).json({ error: "Erro ao buscar dados do usuário" });
    }
}


public async getIdealWeight(req: Request, res: Response): Promise<void> {
    const { id: userId } = res.locals;

    try {
        // Obtém a altura e o gênero do perfil do usuário
        const result = await query(
            `SELECT height_cm, gender FROM profiles WHERE _user = $1`,
            [userId]
        );

        if (!result || result.length === 0) {
            res.status(404).json({ error: "Perfil do usuário não encontrado" });
            return;
        }

        const { height_cm, gender } = result[0];

        // Validação básica
        if (!height_cm) {
            res.status(400).json({ error: "Dados incompletos no perfil para calcular o peso ideal" });
            return;
        }

        // Calcula a faixa de peso ideal baseada no IMC
        const heightInMeters = height_cm / 100;
        const idealWeightMin = 18.5 * Math.pow(heightInMeters, 2);
        const idealWeightMax = 24.9 * Math.pow(heightInMeters, 2);

        // Calcula o peso médio como um único valor ideal
        const idealWeight = (idealWeightMin + idealWeightMax) / 2;

        // Converte idealWeight para número e aplica toFixed
        res.json({ idealWeight: Number(idealWeight.toFixed(2)) });
    } catch (error: any) {
        console.error("Erro ao calcular o peso ideal:", error);
        res.status(500).json({ error: "Erro ao calcular o peso ideal" });
    }
}

public async calculateBMR(req: Request, res: Response): Promise<void> {
    const { id: user } = res.locals;

    try {
        // Obtém os dados do perfil do usuário
        const profileData = await query(
            `SELECT age, weight, height_cm AS height, objective, activity_level, gender 
             FROM profiles 
             WHERE _user = $1`,
            [user]
        );

        if (profileData.length === 0) {
            res.status(404).json({ error: "Perfil não encontrado" });
            return;
        }

        const { age, weight, height, objective, activity_level, gender } = profileData[0];

        // Fórmula de TMB (Taxa Metabólica Basal) usando Harris-Benedict
        let BMR: number;
        if (gender === 'male') {
            BMR = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
        } else {
            BMR = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
        }

        // Multiplicadores de objetivo
        const objectives: { [key: number]: number } = { 0: 0.8, 1: 1, 2: 1.2 }; // 0: perder, 1: manter, 2: ganhar
        const activityLevels: { [key: number]: number } = { 0: 1.2, 1: 1.55, 2: 1.725 }; // 0: baixa, 1: média, 2: alta

        // Calcula o ajuste final baseado no objetivo e nível de atividade e arredonda para um inteiro
        const adjustedBMR = Math.round(BMR * (objectives[objective] ?? 1) * (activityLevels[activity_level] ?? 1));

        // Retorna o BMR arredondado
        res.json({ BMR: adjustedBMR });
    } catch (error) {
        console.error("Erro ao calcular TMB:", error);
        res.status(502).json({ error: "Erro ao calcular TMB" });
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

public async getRandomTip(req: Request, res: Response): Promise<void> {
    try {
        const result = await query(
            `SELECT text FROM tips ORDER BY RANDOM() LIMIT 1`
        );

        if (!result || !result.length) {
            res.status(404).json({ error: "Nenhuma dica encontrada" });
            return;
        }

        const { text } = result[0];
        res.json({ tip: text });
    } catch (error) {
        console.error("Erro ao buscar dica aleatória:", error);
        res.status(500).json({ error: "Erro ao buscar dica" });
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
