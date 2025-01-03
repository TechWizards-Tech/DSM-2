import { EatFoodProps, EatProductProps, ErrorProps } from "../types";
import { api } from "./api";

class EatService {
  // Método para listar produtos consumidos em uma data específica
  async listProducts(date: string): Promise<EatProductProps[] | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const params = { date };
      const { data } = await api.get<EatProductProps[]>("/eat/product", {
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

  // Método para somar calorias diárias
  async getDailyCalories(date: string): Promise<number | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.post<{ total_energy: number }>("/eat/food/daily", { date }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.total_energy;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para somar calorias por período
  async getCaloriesByPeriod(date: string, period: number): Promise<number | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.post<{ total_energy: number }>("/eat/food/period", { date, period }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.total_energy;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para registrar um produto consumido
  async createProduct(product: string, date: string, quantity: number): Promise<EatProductProps[] | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.post<EatProductProps[]>("/eat/product", { product, date, quantity }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para deletar um produto consumido pelo ID
  async deleteProduct(id: string): Promise<EatProductProps | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.delete<EatProductProps>(`/eat/product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para listar alimentos consumidos em uma data e período específicos
  async listFoodsByPeriod(date: string, period: number): Promise<EatFoodProps[] | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.post<EatFoodProps[]>("/eat/food/list", { date, period }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para registrar um alimento consumido
  async createFood(food: number, date: string, quantity: number, period: number): Promise<EatFoodProps | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.post<EatFoodProps>("/eat/food", { food, date, quantity, period }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para deletar um alimento consumido pelo ID
  async deleteFood(id: string): Promise<EatFoodProps | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.post<EatFoodProps>('/eat/food/delete', // Usando POST para a exclusão
        { id }, // Passando o ID no corpo da requisição
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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

const eatService = new EatService();
export default eatService;
