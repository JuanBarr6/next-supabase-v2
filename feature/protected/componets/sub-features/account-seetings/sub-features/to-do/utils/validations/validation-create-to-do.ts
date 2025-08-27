import z from "zod";

export const validationToDo = z.object({
  description: z.string().min(1, "La descripción no puede estar vacía"),

  status: z.string().min(1, "Debes seleccionar un estado"),

  date: z.string().refine(
    (value) => {
      if (!value) return false;

      const [year, month, day] = value.split("-").map(Number);
      const selectedDate = new Date(year, month - 1, day);

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);

      return selectedDate >= today;
    },
    {
      message: "La fecha debe ser igual o mayor a hoy",
    }
  ),
});
