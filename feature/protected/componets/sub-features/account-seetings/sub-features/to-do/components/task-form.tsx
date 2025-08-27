"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import LabelField from "@/feature/shared/components/forms/label-field";
import { useTaskForm } from "../hooks/use-task-form";
import { TaskFormSchemaType } from "../utils/validations/form-validation";
import DateField from "@/feature/shared/components/forms/date-field";
import { taskFormDefaultValues } from "../utils/constants/task-form-default-values";
import SelectField from "@/feature/shared/components/forms/dropdown-field";

interface TaskFormProps {
  onSubmit: (values: TaskFormSchemaType) => void;
  editData?: TaskFormSchemaType;
  zIndex?: number | string;
}

export default function TaskForm({
  onSubmit,
  editData,
  zIndex,
}: TaskFormProps) {
  const form = useTaskForm({
    ...taskFormDefaultValues,
  });

  const showValues = (data: any) => {
    console.log("form data", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(showValues)}
        className="space-y-8 p-4"
        style={{ zIndex }}
      >
        <LabelField controlName="name" title="Descripción de la tarea" />
        <SelectField
          controlName="status"
          title="Estado de la tarea"
          placeholder="Seleccione un estado"
          options={[
            { value: "pendiente", label: "Pendiente" },
            { value: "en-progreso", label: "En progreso" },
            { value: "completada", label: "Completada" },
          ]}
        />
        <DateField controlName="date" title="Fecha de ejecución" />
        <Button type="submit">Guardar tarea</Button>
      </form>
    </Form>
  );
}
