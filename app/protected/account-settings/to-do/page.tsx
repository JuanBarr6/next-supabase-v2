"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TaskModal } from "./components/Taskmodal";
import TaskTable from "./components/Tasktable";
import { Task } from "./hooks/Tasktype"; 

export default function Page() {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  // Guardar nueva tarea
  const handleSave = (task: Omit<Task, "id" | "user_id" | "inserted_at">) => {
    const newTask: Task = {
      id: Date.now(),
      user_id: "default-user", 
      descripcion: task.descripcion,
      estado: task.estado,
      fecha_a_realizar: task.fecha_a_realizar,
      fotos: task.fotos,
      inserted_at: new Date(),
    };
    setTasks((prev) => [...prev, newTask]);
  };

  
  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

 
  const handleEdit = (
    id: number,
    updatedTask: Partial<Pick<Task, "descripcion" | "estado">>
  ) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updatedTask } : t))
    );
  };

  return (
    <main className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Mis tareas</h1>
        <Button onClick={() => setOpen(true)}>Nueva tarea</Button>
      </div>

      <TaskTable
        tasks={tasks}
        onDelete={handleDelete}
        onEdit={(id, descripcion, estado) =>
          handleEdit(id, { descripcion, estado })
        }
      />

      <TaskModal open={open} onOpenChange={setOpen} onSaved={handleSave} />
    </main>
  );
}
