"use client";
import React, { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Pencil, Trash } from "lucide-react";
import { EditableCell } from "../components/edit-to-do";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Task {
  id_task: number;
  task: string;
  status: string;
  user_id: string;
  execution_date: string;
}

interface ColumnsToDoProps {
  editingTaskId: number | null;
  editedTaskText: string;
  editedTaskStatus: string;
  setEditingTaskId: (id: number | null) => void;
  setEditedTaskText: (text: string) => void;
  setEditedTaskStatus: (status: string) => void;
  updateTask: (id: number, task: string, status: string) => void;
  deleteTask: (id: number) => void;
}

export const useColumnsToDo = ({
  editingTaskId,
  editedTaskText,
  editedTaskStatus,
  setEditingTaskId,
  setEditedTaskText,
  setEditedTaskStatus,
  updateTask,
  deleteTask,
}: ColumnsToDoProps) => {
  return useMemo<ColumnDef<Task>[]>(
    () => [
      {
        accessorKey: "id_task",
        header: "Tarea",
      },
      {
        accessorKey: "task",
        header: "Descripción de la tarea",
        cell: ({ row }) => {
          const taskRow = row.original;
          const isEditing = editingTaskId === taskRow.id_task;
          const maxLength = 70;
          const taskText = taskRow.task;
          const isLong = taskText.length > maxLength;
          const shortText = isLong
            ? taskText.slice(0, maxLength) + "..."
            : taskText;

          return isEditing ? (
            <EditableCell
              initialTask={taskRow.task}
              initialStatus={taskRow.status}
              initialDate={taskRow.execution_date}
              id_task={taskRow.id_task}
              updateTask={updateTask}
              cancelEditing={() => setEditingTaskId(null)}
            />
          ) : isLong ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="cursor-help">{shortText}</span>
                </TooltipTrigger>
                <TooltipContent>
                  <span>{taskText}</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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

          return isEditing ? null : (
            <div className="flex items-center gap-2">
              {taskRow.status === "pendiente" ? (
                <Clock size={16} className="text-yellow-500" />
              ) : (
                <CheckCircle size={16} className="text-green-500" />
              )}
            </div>
          );
        },
      },
      {
        accessorKey: "execution_date",
        header: "Fecha a realizar",
        cell: ({ row }) => {
          const fecha = row.original.execution_date;
          const taskRow = row.original;
          const isEditing = editingTaskId === taskRow.id_task;
          return isEditing ? null : fecha;
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
              {isEditing ? null : (
                <>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEditingTaskId(taskRow.id_task);
                      setEditedTaskText(taskRow.task);
                      setEditedTaskStatus(taskRow.status);
                    }}
                  >
                    <Pencil />
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => deleteTask(taskRow.id_task)}
                  >
                    <Trash />
                  </Button>
                </>
              )}
            </div>
          );
        },
      },
    ],
    [
      editingTaskId,
      editedTaskText,
      editedTaskStatus,
      updateTask,
      deleteTask,
      setEditingTaskId,
      setEditedTaskText,
      setEditedTaskStatus,
    ]
  );
};
