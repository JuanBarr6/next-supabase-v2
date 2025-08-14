"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Session } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import Loading from "../../../components/loading";
import { validationToDo } from "../validations/validation-create-to-do";
import { CreateToDo } from "./create-to-do";
import { FilterToDo } from "./filter-to-do";
import { TableToDo } from "./table-to-do";
import { useColumnsToDo } from "../hooks/columns-to-do";

interface Task {
  id_task: number;
  task: string;
  status: string;
  user_id: string;
  execution_date: string;
}

export function ListToDo() {
  const [session, setSession] = useState<Session | null>(null);
  const [data, setData] = useState<Task[]>([]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const [executionDate, setExecutionDate] = useState<Date | undefined>(
    undefined
  );
  const supabase2 = createClient();
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editedTaskText, setEditedTaskText] = useState("");
  const [editedTaskStatus, setEditedTaskStatus] = useState("");
  const [filterDate, setFilterDate] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    description?: string;
    status?: string;
    date?: string;
  }>({});

  const fetchTasks = async (userId?: string) => {
    const { data, error } = await supabase2
      .from("to-do")
      .select("*")
      .eq("user_id", userId)
      .order("user_id", { ascending: false });

    if (error) {
      console.error("Error al obtener tareas:", error.message);
    } else {
      setData(data as Task[]);
    }
  };

  const handleSaveTask = async () => {
    const result = validationToDo.safeParse({
      description: task,
      status: status,
      date: executionDate?.toISOString().split("T")[0] ?? "",
    });

    if (!result.success) {
      const fieldErrors: any = result.error.format();

      setErrors({
        description: fieldErrors.description?._errors?.[0],
        status: fieldErrors.status?._errors?.[0],
        date: fieldErrors.date?._errors?.[0],
      });

      return;
    }

    setErrors({});

    if (!task.trim() || !status.trim() || !session?.user.id) {
      console.log("Faltan datos o sesión");
      return;
    }

    const { error } = await supabase2.from("to-do").insert({
      task,
      status,
      user_id: session.user.id,
      execution_date: executionDate?.toISOString().split("T")[0],
    });

    if (error) {
      console.error("Error al insertar tarea:", error.message);
    } else {
      setTask("");
      setStatus("");
      setExecutionDate(undefined);
      fetchTasks(session.user.id);
    }
  };

  useEffect(() => {
    const init = async () => {
      const {
        data: { user },
      } = await supabase2.auth.getUser();
      if (user) {
        setSession({ user } as Session);
        fetchTasks(user.id);
      }
    };

    init();
  }, []);

  const deleteTask = async (id: number) => {
    const { error } = await supabase2.from("to-do").delete().eq("id_task", id);

    if (error) {
      console.error("Error al eliminar tarea:", error.message);
    } else {
      console.log("Tarea eliminada correctamente");
      if (session?.user.id) {
        fetchTasks(session.user.id);
      }
    }
  };

  const updateTask = async (id: number, newTask: string, newStatus: string) => {
    setIsLoading(true);
    const { error } = await supabase2
      .from("to-do")
      .update({ task: newTask, status: newStatus })
      .eq("id_task", id);

    if (error) {
      console.error("Error al actualizar tarea:", error.message);
    } else if (session?.user.id) {
      fetchTasks(session.user.id);
      setEditingTaskId(null);
    }
    setIsLoading(false);
  };

  const filteredData = useMemo(() => {
    if (!filterDate) return data;

    const formattedFilterDate = filterDate.toISOString().split("T")[0];
    return data.filter((task) => task.execution_date === formattedFilterDate);
  }, [data, filterDate]);

  const columns = useColumnsToDo({
    editingTaskId,
    editedTaskText,
    editedTaskStatus,
    setEditingTaskId,
    setEditedTaskText,
    setEditedTaskStatus,
    updateTask,
    deleteTask,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-col gap-2 mb-4 ">
        <CreateToDo
          task={task}
          setTask={setTask}
          status={status}
          setStatus={setStatus}
          executionDate={executionDate}
          setExecutionDate={setExecutionDate}
          errors={errors}
          onSave={handleSaveTask}
        />
        <FilterToDo filterDate={filterDate} setFilterDate={setFilterDate} />
        <div className=" w-full max-h-[250px] overflow-y-auto border rounded">
          <TableToDo data={filteredData} columns={columns} />
        </div>
      </div>
    </>
  );
}
