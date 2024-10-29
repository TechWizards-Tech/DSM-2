import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL || "",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const registerUser = (alias: string, mail: string, password: string) =>
  api.post("/auth/register", { alias, mail, password });

export const loginUser = (mail: string, password: string) =>
  api.post("/auth/login", { mail, password });
