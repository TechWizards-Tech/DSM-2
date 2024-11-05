import { Request, Response } from "express";
import { query } from "../database/connection";
import { subDays, format } from 'date-fns'; //npm install date-fns

class EatFoodController {
  public async list(req: Request, res: Response): Promise<void> {
    const date = req.query.date as string;
    const period = req.query.period as string;
    const { id:user } = res.locals;

    if (!isValidDate(date)) {
      res.json({ error: "Forneça uma data válida" });
    } else {
      try {
        const result: any = await query(
          `SELECT A.id::varchar, TO_CHAR(A.date, 'YYYY-MM-DD') AS date, A.quantity, 
            A.period, B.description, B.energy, B.protein, 
            B.carbohydrate, B.dietary_fiber, B.calcium, B.sodium
          FROM eat_foods AS A 
          INNER JOIN foods AS B 
          ON A.food = B.id
          WHERE A._user=$1 AND A.date=$2 AND A.period=$3
          ORDER BY B.description`,
          [user, date, period]
        );

        res.json(result);
      } catch (e: any) {
        res.status(502).json({ error: e.message });
      }
    }
  }

  

  private isInvalid(value: any) {
    return value === undefined || value === "";
  }

  public create = async (req: Request, res: Response): Promise<void> => {
    const { food, date, quantity, period } = req.body;
    const { id: user } = res.locals;
  
    if (this.isInvalid(food)) {
      res.json({ error: "Forneça o alimento" });
    } else if (!isValidDate(date)) {
      res.json({ error: "Forneça uma data válida" });
    } else if (this.isInvalid(quantity)) {
      res.json({ error: "Forneça a quantidade consumida" });
    } else if (this.isInvalid(period)) {
      res.json({ error: "Forneça o período" });
    } else {
      try {
        const result: any = await query(
          `INSERT INTO eat_foods(_user, food, date, quantity, period) 
             VALUES($1, $2, $3, $4, $5)
             RETURNING id::varchar, food, TO_CHAR(date, 'YYYY-MM-DD') AS date, quantity, period`,
          [user, food, date, quantity, period]
        );
        res.json(result);
      } catch (e: any) {
        res.status(502).json({ error: e.message });
      }
    }
  };

  public async periodsum(req: Request, res: Response): Promise<void> {
    const date = req.query.date as string;
    const period = req.query.period as string;
    const { id: user } = res.locals;
  
    if (!isValidDate(date)) {
      res.json({ error: "Forneça uma data válida" });
    } else {
      try {
        const result: any = await query(
          `SELECT TO_CHAR(A.date, 'YYYY-MM-DD') AS date, 
                  A.period, 
                  SUM(B.energy * A.quantity) AS total_energy
            FROM eat_foods AS A 
            INNER JOIN foods AS B 
            ON A.food = B.id
            WHERE A._user = $1 AND A.date = $2 AND A.period = $3
            GROUP BY A.date, A.period`,
          [user, date, period]
        );
  
        res.json(result);
      } catch (e: any) {
        res.status(502).json({ error: e.message });
      }
    }
  }

  public async weeklyCalories(req: Request, res: Response, currentDate?: string, daysRemaining = 7, totalCalories = 0): Promise<void> {
    const { id: user } = res.locals;
  
    // Define a data inicial (hoje) se não for passada como parâmetro
    const date = currentDate || format(new Date(), 'yyyy-MM-dd');
  
    // Base da recursão: se não restam dias para calcular, retornar o resultado
    if (daysRemaining === 0) {
      res.json({ totalCalories });
      return;
    }
  
    try {
      // Consulta para obter as calorias do dia atual
      const result: any = await query(
        `SELECT SUM(B.energy * A.quantity) AS total_energy
           FROM eat_foods AS A
           INNER JOIN foods AS B 
           ON A.food = B.id
           WHERE A._user = $1 AND A.date = $2`,
        [user, date]
      );
  
      // Soma as calorias do dia atual ao total
      const dailyCalories = result[0]?.total_energy || 0;
      totalCalories += dailyCalories;
  
      // Chama a função recursivamente para o próximo dia (dia anterior)
      const previousDate = format(subDays(new Date(date), 1), 'yyyy-MM-dd');
      await this.weeklyCalories(req, res, previousDate, daysRemaining - 1, totalCalories);
  
    } catch (error) {
      console.error("Erro ao calcular as calorias dos últimos 7 dias:", error);
      res.status(502).json({ error: "Erro ao calcular as calorias dos últimos 7 dias" });
    }
  }
  

  public async dailysum(req: Request, res: Response): Promise<void> {
    const date = req.query.date as string;
    const { id: user } = res.locals;
  
    if (!isValidDate(date)) {
      res.json({ error: "Forneça uma data válida" });
    } else {
      try {
        const result: any = await query(
          `SELECT TO_CHAR(A.date, 'YYYY-MM-DD') AS date, 
                  SUM(B.energy * A.quantity) AS total_energy
            FROM eat_foods AS A 
            INNER JOIN foods AS B 
            ON A.food = B.id
            WHERE A._user = $1 AND A.date = $2
            GROUP BY A.date`,
          [user, date]
        );
  
        res.json(result);
      } catch (e: any) {
        res.status(502).json({ error: e.message });
      }
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
  
      // Calcula o ajuste final baseado no objetivo e nível de atividade
      const adjustedBMR = BMR * (objectives[objective] ?? 1) * (activityLevels[activity_level] ?? 1);
  
      res.json({ BMR: adjustedBMR.toFixed(2) });
    } catch (error) {
      console.error("Erro ao calcular TMB:", error);
      res.status(502).json({ error: "Erro ao calcular TMB" });
    }
  }
  
  public update = async (req: Request, res: Response): Promise<void> => {
    const { id, food, date, quantity } = req.body;
    const { id: user } = res.locals;
    if (this.isInvalid(id)) {
      res.status(500).json({ error: "Forneça o consumo a ser atualizado" });
    } else if (this.isInvalid(food)) {
      res.json({ error: "Forneça o alimento" });
    } else if (!isValidDate(date)) {
      res.json({ error: "Forneça uma data válida" });
    } else if (this.isInvalid(quantity)) {
      res.json({ error: "Forneça a quantidade consumida" });
    } else {
      try {
        const result: any = await query(
          `UPDATE eat_foods
           SET food=$1, date=$2, quantity=$3
            WHERE id=$4 AND _user=$5 
            RETURNING id::varchar, food, TO_CHAR(date, 'YYYY-MM-DD') AS date, quantity`,
          [food, date, quantity, id, user]
        );
        if (result.rows) {
          res.json(result.rows);
        } else if (result.rowcount == 0) {
          res.status(500).json({
            error: "O consumo não foi localizado para ser atualizado",
          });
        } else {
          res.json(result);
        }
      } catch (e: any) {
        res.status(502).json({ error: e.message });
      }
    }
  };

  public delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body;
    const { id: user } = res.locals;

    if (this.isInvalid(id)) {
      res.status(500).json({ error: "Forneça o consumo a ser excluído" });
    } else {
      try {
        const result: any = await query(
          `DELETE FROM eat_foods 
          WHERE id=$1 AND _user=$2 
          RETURNING id::varchar, food, TO_CHAR(date, 'YYYY-MM-DD') AS date, quantity`,
          [id, user]
        );
        if (result.rowcount > 0) {
          res.json(result.rows);
        } else if (result.rowcount === 0) {
          res.json({ error: "O consumo não está cadastrado" });
        } else {
          res.json(result);
        }
      } catch (e: any) {
        res.status(502).json({ error: e.message });
      }
    }
  };
}

function isValidDate(dateString: string): boolean {
  // Verifica se a string está no formato YYYY-MM-DD usando uma expressão regular
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) {
    return false;
  }

  // Divide a string em partes separadas de ano, mês e dia
  const [year, month, day] = dateString.split("-").map(Number);

  // Verifica se os valores de mês e dia estão no intervalo correto
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }

  // Cria um objeto Date com os valores fornecidos
  const date = new Date(year, month - 1, day);

  // Verifica se os componentes da data correspondem aos valores fornecidos
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

const controller = new EatFoodController();
export default controller;
