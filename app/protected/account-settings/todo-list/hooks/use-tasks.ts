import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

export interface Task {
  id: string;
  nombre: string;
  realizado: boolean;
  fecha?: string;
}

export function useTasks() {
  const supabase = createClient();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  const fetchTasksWithId = async (
    id: string,
    filters: { nombre?: string; realizado?: boolean; fecha?: string } = {}
  ) => {
    setLoading(true);
    try {
      let query = supabase
        .from("todo-list")
        .select("id, nombre, realizado, fecha")
        .eq("id_user", id)
        .order("id", { ascending: false });

      if (filters.nombre?.trim()) {
        query = query.ilike("nombre", `%${filters.nombre.trim()}%`);
      }

      if (filters.realizado !== undefined) {
        query = query.eq("realizado", filters.realizado);
      }

      if (filters.fecha) {
        query = query.eq("fecha", filters.fecha);
      }

      const { data, error } = await query;

      if (error) {
        console.error("Error al cargar tareas:", error);
        setError("Error al cargar tareas");
        return;
      }

      setTasks(data || []);
      setError(null);
    } catch (err: any) {
      console.error("Error inesperado:", err);
      setError("Error inesperado");
    } finally {
      setLoading(false);
    }
  };

  const fetchTasks = async (
    filters: { nombre?: string; realizado?: boolean; fecha?: string } = {}
  ) => {
    if (!userId) return;
    await fetchTasksWithId(userId, filters);
  };

  useEffect(() => {
    const getUserAndTasks = async () => {
      setLoading(true);
      const { data: userData } = await supabase.auth.getUser();
      const user = userData.user;

      if (!user) {
        setError("Usuario no autenticado");
        setLoading(false);
        return;
      }

      setUserId(user.id);
      fetchTasksWithId(user.id);
      setIsReady(true);
    };

    getUserAndTasks();
  }, []);

  const addTask = async (
    nombre: string,
    realizado: boolean,
    fecha?: string
  ) => {
    if (!userId) return;

    const { error } = await supabase.from("todo-list").insert([
      {
        id_user: userId,
        nombre: nombre.trim(),
        realizado,
        fecha,
      },
    ]);

    if (error) {
      console.error("Error al agregar tarea:", error);
      setError("No se pudo agregar la tarea.");
      return false;
    }

    await fetchTasks();
    return true;
  };

  const updateTask = async (id: string, nombre: string, realizado: boolean) => {
    const { error } = await supabase
      .from("todo-list")
      .update({ nombre: nombre.trim(), realizado })
      .eq("id", id);

    if (error) {
      console.error("Error al actualizar tarea:", error);
      setError("No se pudo actualizar la tarea.");
      return false;
    }

    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, nombre: nombre.trim(), realizado } : task
      )
    );

    return true;
  };

  const deleteTask = async (id: string) => {
    const { error } = await supabase.from("todo-list").delete().eq("id", id);

    if (error) {
      console.error("Error al eliminar tarea:", error);
      setError("No se pudo eliminar la tarea.");
      return false;
    }

    setTasks((prev) => prev.filter((task) => task.id !== id));
    return true;
  };

  const reloadTasks = async () => {
    await fetchTasks();
  };

  const searchTasks = async (filters: {
    nombre?: string;
    realizado?: boolean;
    fecha?: string;
  }) => {
    await fetchTasks(filters);
  };

  return {
    tasks,
    loading,
    error,
    addTask,
    updateTask,
    deleteTask,
    reloadTasks,
    searchTasks,
    isReady,
  };
}
