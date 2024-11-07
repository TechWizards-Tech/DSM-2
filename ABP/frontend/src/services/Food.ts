import { ErrorProps, FoodNutrientsProps, PageProps } from "../types";
import { api } from "./api";

class FoodService {
  // Método para listar os alimentos com paginação
  async list(page: number): Promise<PageProps | ErrorProps> {
    const params = {
      page,
      pagesize: process.env.REACT_APP_PAGE_SIZE,
    };
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.get<PageProps>("/food/list", {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para obter detalhes de um alimento pelo ID
  async getById(idfood: string): Promise<FoodNutrientsProps | ErrorProps> {
    const params = { idfood };
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.get<FoodNutrientsProps>("/food/get", {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para buscar alimentos com base em um termo
  async search(term: string): Promise<PageProps | ErrorProps> {
    const params = { term };
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.get<PageProps>("/food/search", {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Função dedicada para lidar com erros
  private handleError(error: any): ErrorProps {
    console.error("Erro ao acessar a API:", error);
    return { error: error.message || "Erro desconhecido ao acessar a API." };
  }
}

const foodService = new FoodService();
export default foodService;
