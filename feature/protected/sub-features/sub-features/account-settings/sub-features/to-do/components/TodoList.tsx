/*"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Task {
  id_task: number;
  task: string;
  user_id: string;
  status: string; 
}

export function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [newStatus, setNewStatus] = useState("pendiente");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTask, setEditTask] = useState("");
  const [editStatus, setEditStatus] = useState("pendiente");
  const supabase = createClient();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) return;

    const { data, error } = await supabase
      .from("to-do")
      .select("*")
      .eq("user_id", session.user.id)
      .order("id_task", { ascending: true });

    if (!error && data) setTasks(data);
  };

  const handleAddTask = async () => {
    if (!newTask.trim()) return;

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) return;

    const { error } = await supabase.from("to-do").insert([
      {
        task: newTask,
        status: newStatus,
        user_id: session.user.id,
      },
    ]);

    if (!error) {
      setNewTask("");
      setNewStatus("pendiente");
      fetchTasks();
    }
  };

  const toggleStatus = async (id_task: number, current: string) => {
    const newStatus = current === "pendiente" ? "completada" : "pendiente";
    await supabase
      .from("to-do")
      .update({ status: newStatus })
      .eq("id_task", id_task);
    fetchTasks();
  };

  const eliminarTask = async (id_task: number) => {
    await supabase.from("to-do").delete().eq("id_task", id_task);
    setTasks((prev) => prev.filter((t) => t.id_task !== id_task));
  };

  const startEditing = (task: Task) => {
    setEditingId(task.id_task);
    setEditTask(task.task);
    setEditStatus(task.status);
  };

  const saveEdit = async () => {
    if (editingId === null || !editTask.trim()) return;

    await supabase
      .from("to-do")
      .update({ task: editTask, status: editStatus })
      .eq("id_task", editingId);

    setEditingId(null);
    setEditTask("");
    setEditStatus("pendiente");
    fetchTasks();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Lista de Tareas</h1>
        <div className="flex gap-2 w-full sm:w-auto">
          <Input
            type="text"
            placeholder="Nueva tarea"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <select
            className="border p-2 rounded text-black"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option value="pendiente">Pendiente</option>
            <option value="completada">Completada</option>
          </select>
          <Button onClick={handleAddTask}>Agregar</Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Tarea</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id_task}>
              <TableCell>{task.id_task}</TableCell>
              <TableCell>
                {editingId === task.id_task ? (
                  <Input
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                  />
                ) : (
                  task.task
                )}
              </TableCell>
              <TableCell>
                {editingId === task.id_task ? (
                  <select
                    className="border p-1 rounded w-full text-black"
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value)}
                  >
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                  </select>
                ) : (
                  <Button
                    variant="ghost"
                    onClick={() => toggleStatus(task.id_task, task.status)}
                  >
                    {task.status === "completada" ? "✅" : "❌"}
                  </Button>
                )}
              </TableCell>
              <TableCell className="flex gap-2">
                {editingId === task.id_task ? (
                  <Button onClick={saveEdit}>Guardar</Button>
                ) : (
                  <Button
                    className="bg-blue-500 text-white"
                    onClick={() => startEditing(task)}
                  >
                    Editar
                  </Button>
                )}
                <Button
                  className="bg-red-600 text-white"
                  onClick={() => eliminarTask(task.id_task)}
                >
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
*/