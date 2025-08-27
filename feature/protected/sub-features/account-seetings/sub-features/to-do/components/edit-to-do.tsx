"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar22 } from "../../../components/calendar";

interface EditableCellProps {
  initialTask: string;
  initialStatus: string;
  initialDate: string;
  id_task: number;
  updateTask: (id: number, task: string, status: string, date: string) => void;
  cancelEditing: () => void;
}

export function EditableCell({
  initialTask,
  initialStatus,
  initialDate,
  id_task,
  updateTask,
  cancelEditing,
}: EditableCellProps) {
  const [editedTaskText, setEditedTaskText] = useState(initialTask);
  const [editedTaskStatus, setEditedTaskStatus] = useState(initialStatus);
  const [editedTaskDate, setEditedTaskDate] = useState<Date | undefined>(
    initialDate ? new Date(initialDate) : undefined
  );

  useEffect(() => {
    setEditedTaskText(initialTask);
    setEditedTaskStatus(initialStatus);
  }, [initialTask, initialStatus]);

  const handleSave = () => {
    const formattedDate = editedTaskDate?.toISOString().split("T")[0] || "";
    updateTask(id_task, editedTaskText, editedTaskStatus, formattedDate);
  };

  return (
    <div className="flex flex-row w-full gap-2">
      <input
        type="text"
        className="border p-2 rounded text-black w-auto"
        value={editedTaskText}
        onChange={(e) => setEditedTaskText(e.target.value)}
      />
      <select
        className="border p-1 rounded text-black"
        value={editedTaskStatus}
        onChange={(e) => setEditedTaskStatus(e.target.value)}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completada">Completada</option>
      </select>
      <Calendar22
        placeholderText="Fecha a realizar tarea"
        onDateChange={(date) => setEditedTaskDate(date)}
      />
      <div className="flex gap-2 mt-2">
        <Button onClick={handleSave}>Guardar</Button>
        <Button variant="ghost" onClick={cancelEditing}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}
