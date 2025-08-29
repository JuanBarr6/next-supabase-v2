"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TaskModal } from "./components/Taskmodal";
import { TaskTable } from "./components/Tasktable";

interface Task {
  id: number;
  name: string;
  done: boolean;
  date?: Date;
}

export default function Page() {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSave = (task: { name: string; done: boolean; date?: Date }) => {
    const newTask: Task = {
      id: Date.now(),
      ...task,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleToggle = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEdit = (id: number, updatedTask: Partial<Task>) => {
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
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      <TaskModal open={open} onOpenChange={setOpen} onSave={handleSave} />
    </main>
  );
}
