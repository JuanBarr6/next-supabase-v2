"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Session } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import { EditableCell } from "./edit-to-do";

interface Task {
  id_task: number;
  task: string;
  status: string;
  user_id: string;
}

export function ListToDo() {
  const [session, setSession] = useState<Session | null>(null);
  const [data, setData] = useState<Task[]>([]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const supabase2 = createClient();

  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editedTaskText, setEditedTaskText] = useState("");
  const [editedTaskStatus, setEditedTaskStatus] = useState("");

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

  const handleTesRender = async () => {
    if (!task.trim() || !status.trim() || !session?.user.id) {
      console.log("Faltan datos o sesión");
      return;
    }

    const { error } = await supabase2.from("to-do").insert({
      task,
      status,
      user_id: session.user.id,
    });

    if (error) {
      console.error("Error al insertar tarea:", error.message);
    } else {
      setTask("");
      setStatus("");
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
      if (session?.user.id) {
        fetchTasks(session.user.id);
      }
    }
  };

  const updateTask = async (id: number, newTask: string, newStatus: string) => {
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
  };

  const columns = useMemo<ColumnDef<Task>[]>(
    () => [
      {
        accessorKey: "id_task",
        header: "id",
      },
      {
        accessorKey: "task",
        header: "Tarea",
        cell: ({ row }) => {
          const taskRow = row.original;
          const isEditing = editingTaskId === taskRow.id_task;

          return isEditing ? (
            <EditableCell
              initialTask={taskRow.task}
              initialStatus={taskRow.status}
              id_task={taskRow.id_task}
              updateTask={updateTask}
              cancelEditing={() => setEditingTaskId(null)}
            />
          ) : (
            taskRow.task
          );
        },
      },
      {
        accessorKey: "status",
        header: "Estado",
        cell: ({ row }) => {
          const taskRow = row.original;
          const isEditing = editingTaskId === taskRow.id_task;

          return isEditing ? (
            <select
              className="border p-1 rounded w-full text-black"
              value={editedTaskStatus}
              onChange={(e) => setEditedTaskStatus(e.target.value)}
            >
              <option value="pendiente">Pendiente</option>
              <option value="completada">Completada</option>
            </select>
          ) : (
            taskRow.status
          );
        },
      },
      {
        id: "actions",
        header: "Acciones",
        cell: ({ row }) => {
          const taskRow = row.original;
          const isEditing = editingTaskId === taskRow.id_task;

          return (
            <div className="flex gap-2">
              {isEditing ? (
                <></>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEditingTaskId(taskRow.id_task);
                      setEditedTaskText(taskRow.task);
                      setEditedTaskStatus(taskRow.status);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => deleteTask(taskRow.id_task)}
                  >
                    Eliminar
                  </Button>
                </>
              )}
            </div>
          );
        },
      },
    ],
    [editingTaskId, editedTaskText, editedTaskStatus]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Nombre de la tarea"
          className="border p-2 rounded text-black"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <select
          className="border p-2 rounded text-black"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Selecciona estado</option>
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>

        <Button onClick={handleTesRender}>Guardar tarea</Button>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
