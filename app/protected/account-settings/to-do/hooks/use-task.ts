/*
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client"; // 👈 usa la instancia

export interface Task {
  id: number;
  task: string;
  user_id: string;
  status: string;
  due_date?: string;
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

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
      .order("id", { ascending: true });

    if (!error && data) setTasks(data as Task[]);
  };

  const addTask = async (task: string, status: string, dueDate?: Date) => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session?.user) return;

    const { data, error } = await supabase
      .from("to-do")
      .insert([
        {
          task,
          status,
          user_id: session.user.id,
          due_date: dueDate?.toISOString().split("T")[0],
        },
      ])
      .select();

    if (!error && data) {
      setTasks((prev) => [...prev, ...(data as Task[])]);
    }
  };

  const toggleStatus = async (id: number, current: string) => {
    const newStatus = current === "pendiente" ? "completada" : "pendiente";
    const { error } = await supabase
      .from("to-do")
      .update({ status: newStatus })
      .eq("id", id);

    if (!error) {
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
      );
    }
  };

  const deleteTask = async (id: number) => {
    const { error } = await supabase.from("to-do").delete().eq("id", id);
    if (!error) {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    }
  };

  const editTask = async (id: number, newTask: string, newStatus: string) => {
    const { error } = await supabase
      .from("to-do")
      .update({ task: newTask, status: newStatus })
      .eq("id", id);

    if (!error) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === id ? { ...t, task: newTask, status: newStatus } : t
        )
      );
    }
  };

  return { tasks, addTask, toggleStatus, deleteTask, editTask };
}
*/