"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Task {
  id: string;
  nombre: string;
  realizado: boolean;
}

export default function TodoList() {
  const supabase = createClient();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState("");

  // Estados para edición
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");
  const [editingDone, setEditingDone] = useState(false);
  const [editing, setEditing] = useState(false);

  // Estado para eliminación
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchTasks = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data, error } = await supabase
      .from("todo-list")
      .select("id, nombre, realizado")
      .eq("id_user", user.id);

    if (!error) {
      setTasks(data || []);
    } else {
      console.error("Error fetching tasks:", error);
      setError("Error al cargar tareas");
    }
  };

  const handleAddTask = async () => {
    setAdding(true);
    setError("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setError("No se pudo obtener el usuario.");
      setAdding(false);
      return;
    }

    if (!newTask.trim()) {
      setError("El nombre de la tarea no puede estar vacío.");
      setAdding(false);
      return;
    }

    const { error: insertError } = await supabase.from("todo-list").insert([
      {
        id_user: user.id,
        nombre: newTask.trim(),
        realizado: isDone,
      },
    ]);

    if (insertError) {
      console.error("Error insertando tarea:", insertError);
      setError("No se pudo agregar la tarea.");
    } else {
      setNewTask("");
      setIsDone(false);
      await fetchTasks();
    }

    setAdding(false);
  };

  // Iniciar edición de una tarea
  const startEditing = (task: Task) => {
    setEditingId(task.id);
    setEditingText(task.nombre);
    setEditingDone(task.realizado);
  };

  // Cancelar edición
  const cancelEditing = () => {
    setEditingId(null);
    setEditingText("");
    setEditingDone(false);
  };

  // Guardar cambios de edición
  const saveEditing = async () => {
    if (!editingId) return;

    setEditing(true);
    setError("");

    const { error: updateError } = await supabase
      .from("todo-list")
      .update({
        nombre: editingText.trim(),
        realizado: editingDone,
      })
      .eq("id", editingId);

    if (updateError) {
      console.error("Error actualizando tarea:", updateError);
      setError("No se pudo actualizar la tarea.");
    } else {
      // Actualizar estado local
      setTasks(
        tasks.map((task) =>
          task.id === editingId
            ? { ...task, nombre: editingText.trim(), realizado: editingDone }
            : task
        )
      );
      cancelEditing();
    }

    setEditing(false);
  };

  // Eliminar una tarea
  const handleDelete = async (id: string) => {
    setDeletingId(id);
    setError("");

    const { error } = await supabase.from("todo-list").delete().eq("id", id);

    if (error) {
      console.error("Error eliminando tarea:", error);
      setError("No se pudo eliminar la tarea.");
    } else {
      // Eliminar del estado local
      setTasks(tasks.filter((task) => task.id !== id));
    }

    setDeletingId(null);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>
      <div className="flex items-center gap-4 mb-6">
        <Input
          placeholder="Nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div className="flex items-center gap-2">
          <Checkbox
            id="realizado"
            checked={isDone}
            onCheckedChange={(checked) => setIsDone(!!checked)}
          />
          <label htmlFor="realizado" className="text-sm">
            ¿Realizado?
          </label>
        </div>
        <Button onClick={handleAddTask} disabled={adding}>
          {adding ? "Agregando..." : "Agregar"}
        </Button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Tarea</TableHead>
            <TableHead className="text-center">Realizado</TableHead>
            <TableHead className="text-center">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task, index) => (
            <TableRow key={task.id}>
              <TableCell>{index + 1}</TableCell>

              <TableCell>
                {editingId === task.id ? (
                  <Input
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                ) : (
                  task.nombre
                )}
              </TableCell>

              <TableCell className="text-center">
                {editingId === task.id ? (
                  <Checkbox
                    checked={editingDone}
                    onCheckedChange={(checked) => setEditingDone(!!checked)}
                  />
                ) : task.realizado ? (
                  "✅"
                ) : (
                  "❌"
                )}
              </TableCell>

              <TableCell className="text-center">
                {editingId === task.id ? (
                  <div className="flex gap-2 justify-center">
                    <Button size="sm" onClick={saveEditing} disabled={editing}>
                      {editing ? "Guardando..." : "Guardar"}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={cancelEditing}
                      disabled={editing}
                    >
                      Cancelar
                    </Button>
                  </div>
                ) : (
                  <div className="flex gap-2 justify-center">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => startEditing(task)}
                    >
                      Editar
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(task.id)}
                      disabled={deletingId === task.id}
                    >
                      {deletingId === task.id ? "Eliminando..." : "Eliminar"}
                    </Button>
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
