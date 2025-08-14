"use client";

import { Form } from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import LabelField from "@/feature/shared/components/forms/label-field";
import { useTaskForm } from "@/feature/protected/sub-features/account-settings/sub-features/todo/hooks/use-task-form";
import { TaskFormSchemaType } from "@/feature/protected/sub-features/account-settings/sub-features/todo/utils/validations/task-form-schema";
import DateField from "@/feature/shared/components/forms/date-field";
import { taskFormDefaultValues } from "@/feature/protected/sub-features/account-settings/sub-features/todo/utils/constants/task-form-default-values";

interface TaskFormProps {
  onSubmit: (values: TaskFormSchemaType) => void;
  editData?: TaskFormSchemaType;
}

export default function TaskForm({ onSubmit, editData }: TaskFormProps) {
  const form = useTaskForm({
    ...taskFormDefaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4">
        <LabelField title="Nombre" controlName="nombre" />
        <LabelField title="Relizado" controlName="realizado" />
        <DateField title="Fecha" controlName="fecha" />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
