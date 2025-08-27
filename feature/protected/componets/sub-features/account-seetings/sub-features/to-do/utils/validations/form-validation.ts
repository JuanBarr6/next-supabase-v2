import z from "zod";

export const taskFormSchema = z.object({
  name: z.string(),
  status: z.string(),
  date: z.date(),
});
export type TaskFormSchemaType = z.infer<typeof taskFormSchema>;
