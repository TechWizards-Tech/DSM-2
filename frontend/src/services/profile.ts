import { ErrorProps, ProfileProps, Gender } from "../types"; // Importa o enum Gender
import { api } from "./api";

class Profile {
  async list(): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.get("/profile");
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async create(profileData: {
    age: number; // Idade em anos
    weight: number; // Peso em kg
    height_cm: number; // Altura em centímetros
    objective: number; // Objetivo
    activity_level: number; // Nível de atividade
    diet_type: number; // Tipo de dieta
    gender: Gender; // Alterado para usar o enum Gender
  }): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.post("/profile", profileData);
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async update(profileData: {
    age: number; // Idade em anos
    weight: number; // Peso em kg
    height_cm: number; // Altura em centímetros
    objective: number; // Objetivo
    activity_level: number; // Nível de atividade
    diet_type: number; // Tipo de dieta
    gender: Gender; // Alterado para usar o enum Gender
  }): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.put("/profile", profileData);
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async delete(): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.delete("/profile");
      return data;
    } catch (error: any) {
      return error;
    }
  }
}

const profile = new Profile();
export default profile;
