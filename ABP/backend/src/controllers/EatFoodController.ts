import { Request, Response } from "express";
import { query } from "../database/connection";
import { subDays, format } from 'date-fns';

class EatFoodController {
  public async list(req: Request, res: Response): Promise<void> {
    const date = req.query.date as string;
    const period = Number(req.query.period);
    const { id: user } = res.locals;

    if (!isValidDate(date)) {
      res.json({ error: "Forneça uma data válida" });
    } else {
      try {
        const result: any = await query(
          `SELECT A.id::varchar, A.date, A.quantity, 
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
    console.log("CHEGUEI");
  
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
             RETURNING id::varchar, food, date, quantity, period`,
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
    const period = Number(req.query.period);
    const { id: user } = res.locals;
  
    if (!isValidDate(date)) {
      res.json({ error: "Forneça uma data válida" });
    } else {
      try {
        const result: any = await query(
          `SELECT A.date, 
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
    const date = currentDate || format(new Date(), 'yyyy-MM-dd');
  
    if (daysRemaining === 0) {
      res.json({ totalCalories });
      return;
    }
  
    try {
      const result: any = await query(
        `SELECT SUM(B.energy * A.quantity) AS total_energy
           FROM eat_foods AS A
           INNER JOIN foods AS B 
           ON A.food = B.id
           WHERE A._user = $1 AND A.date = $2`,
        [user, date]
      );
  
      const dailyCalories = result[0]?.total_energy || 0;
      totalCalories += dailyCalories;
  
      const previousDate = format(subDays(new Date(date), 1), 'yyyy-MM-dd');
      await this.weeklyCalories(req, res, previousDate, daysRemaining - 1, totalCalories);
  
    } catch (error) {
      console.error("Erro ao calcular as calorias dos últimos 7 dias:", error);
      res.status(502).json({ error: "Erro ao calcular as calorias dos últimos 7 dias" });
    }
  }

  public async dailysum(req: Request, res: Response): Promise<void> {
    const date = req.body.date as string;  // Agora usando req.body.date
    const { id: user } = res.locals;

    if (!isValidDate(date)) {
        res.json({ error: "Forneça uma data válida" });
    } else {
        try {
            const result: any = await query(
                `SELECT COALESCE(SUM(B.energy * A.quantity) / 100, 0) AS total_energy
                 FROM eat_foods AS A 
                 INNER JOIN foods AS B 
                 ON A.food = B.id
                 WHERE A._user = $1 AND A.date = $2`,
                [user, date]
            );
            
            console.log({total_energy: result[0].total_energy});
            res.json({ total_energy: result[0].total_energy });
        } catch (e: any) {
            res.status(502).json({ error: e.message });
        }
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
            RETURNING id::varchar, food, date, quantity`,
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
          RETURNING id::varchar, food, date, quantity`,
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
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) {
    return false;
  }
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

const controller = new EatFoodController();
export default controller;
