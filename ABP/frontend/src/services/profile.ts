import { ErrorProps, ProfileProps, Gender } from "../types";
import { api } from "./api";

class ProfileService {
  // Method to list the profile
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

  // Method to create a new profile
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

  // Method to update the existing profile
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

  // Method to delete the profile
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

  // Method to get user and profile data
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


  // Dedicated function to handle errors
  private handleError(error: any): ErrorProps {
    console.error("Erro ao acessar a API:", error);
    return { error: error.message || "Erro desconhecido ao acessar a API." };
  }
}

const profileService = new ProfileService();
export default profileService;
