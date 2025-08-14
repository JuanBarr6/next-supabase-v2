"use client";

import { Form } from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import LabelField from "@/feature/shared/components/forms/label-field";
import { useTaskForm } from "@/feature/protected/sub-features/account-settings/sub-features/todo/hooks/use-task-form";
import { TaskFormSchemaType } from "@/feature/protected/sub-features/account-settings/sub-features/todo/utils/validations/task-form-schema";

export default function TaskForm() {
  const form = useTaskForm();

  function onSubmit(values: TaskFormSchemaType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4">
        <LabelField title="Nombre" controlName="nombre" />
        <LabelField title="Relizado" controlName="realizado" />
        <LabelField title="Fecha" controlName="fecha" />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
