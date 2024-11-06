import { ErrorProps, ProfileProps, Gender } from "../types";
import { api } from "./api";

class ProfileService {
  // Método para listar o perfil
  async list(): Promise<ProfileProps | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.get<ProfileProps>("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para criar um novo perfil
  async create(profileData: {
    age: number;
    weight: number;
    height_cm: number;
    objective: number;
    activity_level: number;
    diet_type: number;
    gender: Gender;
  }): Promise<ProfileProps | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.post<ProfileProps>("/profile", profileData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para atualizar o perfil existente
  async update(profileData: {
    age: number;
    weight: number;
    height_cm: number;
    objective: number;
    activity_level: number;
    diet_type: number;
    gender: Gender;
  }): Promise<ProfileProps | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.put<ProfileProps>("/profile", profileData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para deletar o perfil
  async delete(): Promise<ProfileProps | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.delete<ProfileProps>("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para buscar dados do usuário e do perfil
  async getUserProfile(): Promise<{ alias: string; mail: string; age: number; weight: number; height_cm: number } | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.get<{
        alias: string;
        mail: string;
        age: number;
        weight: string;
        height_cm: string;
      }>("/profile/getUserProfile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userProfile = {
        alias: data.alias,
        mail: data.mail,
        age: data.age,
        weight: parseFloat(data.weight),
        height_cm: parseFloat(data.height_cm),
      };

      return userProfile;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para obter o peso ideal
  async getIdealWeight(): Promise<{ idealWeight: number } | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.get<{ idealWeight: number }>("/profile/idealWeight", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para obter a Taxa Metabólica Basal (BMR)
  async calculateBMR(): Promise<{ BMR: number } | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.get<{ BMR: number }>("/profile/calculateBMR", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para obter uma dica aleatória
  async getRandomTip(): Promise<{ tip: string } | ErrorProps> {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await api.get<{ tip: string }>("/profile/randomTip", {
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

const profileService = new ProfileService();
export default profileService;
