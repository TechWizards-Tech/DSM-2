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

  // Método para listar alimentos consumidos em uma data específica
  async listFoods(date: Date, period: number): Promise<EatFoodProps[] | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const params = { date: date.toISOString().split('T')[0], period };
      const { data } = await api.get<EatFoodProps[]>("/eat", {
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

  // Método para registrar um alimento consumido
  async createFood(food: string, date: string, quantity: number, period: number): Promise<EatFoodProps | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.post<EatFoodProps>("/eat", { food, date, quantity, period }, {
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
      const { data } = await api.delete<EatFoodProps>(`/eat/${id}`, {
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

const eatService = new EatService();
export default eatService;
