import { LoginDto } from "../types/auth.dto";

export class AuthService {
  static async login(credentials: LoginDto) {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Error en el login");
    }

    return await response.json();
  }
}
