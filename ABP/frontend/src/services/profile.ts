import { ErrorProps, ProfileProps, Gender } from "../types"; // Importa o enum Gender
import { api } from "./api";

class ProfileService {
  // Método para listar o perfil
  async list(): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.get<ProfileProps>("/profile"); // Define o tipo esperado para a resposta
      return data;
    } catch (error: any) {
      return this.handleError(error); // Manipula o erro usando uma função dedicada
    }
  }

  // Método para criar um novo perfil
  async create(profileData: {
    userId: number; // Adiciona userId
    age: number; // Idade em anos
    weight: number; // Peso em kg
    height_cm: number; // Altura em centímetros
    objective: number; // Objetivo
    activity_level: number; // Nível de atividade
    diet_type: number; // Tipo de dieta
    gender: Gender; // Alterado para usar o enum Gender
  }): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.post<ProfileProps>("/profile", profileData); // Define o tipo esperado para a resposta
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para atualizar o perfil existente
  async update(profileData: {
    userId: number; // Adiciona userId
    age: number; // Idade em anos
    weight: number; // Peso em kg
    height_cm: number; // Altura em centímetros
    objective: number; // Objetivo
    activity_level: number; // Nível de atividade
    diet_type: number; // Tipo de dieta
    gender: Gender; // Alterado para usar o enum Gender
  }): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.put<ProfileProps>("/profile", profileData); // Define o tipo esperado para a resposta
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Método para deletar o perfil
  async delete(): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.delete<ProfileProps>("/profile"); // Define o tipo esperado para a resposta
      return data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  // Função dedicada para tratar erros
  private handleError(error: any): ErrorProps {
    // Aqui você pode personalizar como deseja manipular o erro
    console.error("Erro ao acessar a API:", error);
    return { error: error.message || "Erro desconhecido ao acessar a API." }; // Retorna um objeto de erro
  }
}

const profileService = new ProfileService();
export default profileService;
