import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Email inválido").min(1, "Email es requerido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export type LoginDto = z.infer<typeof LoginSchema>;
