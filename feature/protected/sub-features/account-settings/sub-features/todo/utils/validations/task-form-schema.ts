import z from "zod";

export const taskFormSchema = z.object({
  nombre: z.string(),
  realizado: z.string(),
  fecha: z.string(),
});

export type TaskFormSchemaType = z.infer<typeof taskFormSchema>;
