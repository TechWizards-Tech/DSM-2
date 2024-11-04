import { ErrorProps, TokenProps, UserProps } from "../types";
import { api } from "./api";

class User {
  async login(mail: string, password: string ): Promise<TokenProps | ErrorProps> {
    try {
      const { data } = await api.post("/login", { mail, password });
      
      // Salva o token e o ID do usuário no localStorage, caso o login tenha sucesso
      if ('token' in data) {
        localStorage.setItem("userToken", data.token); // Salva o token da sessão
        localStorage.setItem("userId", data.id);       // Salva o ID do usuário
      }

      return data;
    } catch (error: any) {
      return error;
    }
  }

  async create(alias: string, mail: string, password: string): Promise<TokenProps | ErrorProps> {
    try {
      const { data } = await api.post("/user", { alias, mail, password });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async updateAlias(alias: string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/user/alias", { alias });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async updateMail(mail: string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/user/mail", { mail });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async updatePassword(password: string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/user/password", { password });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async list(): Promise<UserProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/user");
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async updateRole(id: string, role: string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/user/role", { id, role });
      return data;
    } catch (error: any) {
      return error;
    }
  }
}

const user = new User();
export default user;
