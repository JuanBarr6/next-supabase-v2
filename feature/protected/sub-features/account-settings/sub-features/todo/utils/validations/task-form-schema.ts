import z from "zod";

export const taskFormSchema = z.object({
  nombre: z.string(),
  realizado: z.string(),
  fecha: z.date(),
});

export type TaskFormSchemaType = z.infer<typeof taskFormSchema>;
