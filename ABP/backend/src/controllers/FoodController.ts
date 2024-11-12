import { Request, Response } from "express";
import {query} from "../database/connection";


class FoodController {


  public async listByDescription(req: Request, res: Response): Promise<void> {
    let term = req.query.term as string;
    if (!term || term.trim().length === 0) {
      res.status(500).json({ error: "Forneça a descrição do alimento" });
    } else {
      try {
        term = `%${term.trim()}%`;
        const queryTerm: any = await query(
          `SELECT id::varchar, description
            FROM foods
            WHERE description ILIKE $1
            ORDER BY description`,
          [term]
        );
        if ("message" in queryTerm) {
          res.status(500).json(queryTerm);
        } else {
          res.json({ items: queryTerm, total:queryTerm.length, page:1, pagesize:queryTerm.length });
        }
      } catch (e: any) {
        res.status(502).json({ error: e.message });
      }
    }
  }

  // para usar o this em this.formattedResult é preciso que list seja arrow function
  public list = async (req: Request, res: Response): Promise<void> => {
    let page: any = req.query.page as string;
    let pagesize: any = req.query.pagesize as string;

    if (!page || isNaN(parseInt(page)) || parseInt(page) < 1) {
      page = 1;
    }
    if (!pagesize || isNaN(parseInt(pagesize)) || parseInt(pagesize) < 1) {
      pagesize = 20;
    }
    try {
      page = parseInt(page);
      pagesize = parseInt(pagesize);

      // obtém a quantidade de registros da tabela
      const queryCount: any = await query(
        "SELECT count(id)::integer FROM foods"
      );
      if (queryCount.length === 1 && queryCount[0].count) {
        const total = queryCount[0].count;
        // obtém a quantidade de páginas
        const pages = Math.ceil(total / pagesize);
        if (page > pages) {
          page = pages;
        }
        // obtém o offset
        const offset = (page - 1) * pagesize;
        const queryFoods: any = await query(
          `SELECT id::varchar, description
            FROM foods
            ORDER BY description
            LIMIT $1 
            OFFSET $2`,
          [pagesize, offset]
        );
        if ("message" in queryFoods) {
          res.status(500).json(queryFoods);
        } else {
          res.json({ items:queryFoods, total, page, pagesize });
        }
      } else {
        res
          .status(500)
          .json({ error: "Problemas ao obter a quantidade de registros" });
      }
    } catch (e: any) {
      res.status(502).json({ message: e.message });
    }
  }

  
}

const controller = new FoodController();
export default controller;
