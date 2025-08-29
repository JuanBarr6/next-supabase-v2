"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface Task {
  id: number;
  task: string;
  status: string;
  user_id: string;
}

interface TaskTableProps {
  tasks: Task[];
  onEdit: (id: number, task: string, status: string) => void;
  onDelete: (id: number) => void;
}

export default function TaskTable({ tasks, onEdit, onDelete }: TaskTableProps) {
  const form = useForm<{ task: string; status: string }>({
    defaultValues: { task: "", status: "" },
  });

  const handleSubmit = (data: { task: string; status: string }, id: number) => {
    onEdit(id, data.task, data.status);
    form.reset();
  };

  return (
    <div className="space-y-4">
      {tasks.map((t) => (
        <Form key={t.id} {...form}>
          <form
            onSubmit={form.handleSubmit((data) => handleSubmit(data, t.id))}
            className="flex items-center gap-2"
          >
            <FormField
              control={form.control}
              name="task"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tarea</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t.task} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t.status} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Editar</Button>
            <Button
              type="button"
              variant="destructive"
              onClick={() => onDelete(t.id)}
            >
              Eliminar
            </Button>
          </form>
        </Form>
      ))}
    </div>
  );
}
