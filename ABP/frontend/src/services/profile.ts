import { ErrorProps, ProfileProps, Gender } from "../types";
import { api } from "./api";

class ProfileService {
  // Método para listar o perfil
  async list(): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.get<ProfileProps>("/profile");
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para criar um novo perfil
  async create(profileData: {
    userId: number;
    age: number;
    weight: number;
    height_cm: number;
    objective: number;
    activity_level: number;
    diet_type: number;
    gender: Gender;
  }): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.post<ProfileProps>("/profile", profileData);
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para atualizar o perfil existente
  async update(profileData: {
    userId: number;
    age: number;
    weight: number;
    height_cm: number;
    objective: number;
    activity_level: number;
    diet_type: number;
    gender: Gender;
  }): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.put<ProfileProps>("/profile", profileData);
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para deletar o perfil
  async delete(): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.delete<ProfileProps>("/profile");
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para obter dados do usuário e do perfil
  async getUserProfile(userId: number): Promise<{ alias: string; mail: string; age: number; weight: number; height_cm: number } | ErrorProps> {
    try {
      const { data } = await api.get<{
        alias: string;
        mail: string;
        age: number;
        weight: string; // Se você estiver retornando como string, mantenha
        height_cm: string; // O mesmo aqui
      }>(`/profile/getUserProfile`, {
        params: { userId } // Passando o userId como parâmetro da URL
      });
  
      console.log("Dados do perfil retornados:", data);
  
      const userProfile = {
        alias: data.alias,
        mail: data.mail,
        age: data.age,
        weight: parseFloat(data.weight), // Converter para número
        height_cm: parseFloat(data.height_cm), // Converter para número
      };
  
      return userProfile;
    } catch (error: any) {
      return this.handleError(error);
    }
  }
  
  

  // Função dedicada para tratar erros
  private handleError(error: any): ErrorProps {
    console.error("Erro ao acessar a API:", error);
    return { error: error.message || "Erro desconhecido ao acessar a API." };
  }
}

const profileService = new ProfileService();
export default profileService;
