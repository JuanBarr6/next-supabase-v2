"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface EditableCellProps {
  initialTask: string;
  initialStatus: string;
  id_task: number;
  updateTask: (id: number, task: string, status: string) => void;
  cancelEditing: () => void;
}

export function EditableCell({
  initialTask,
  initialStatus,
  id_task,
  updateTask,
  cancelEditing,
}: EditableCellProps) {
  const [editedTaskText, setEditedTaskText] = useState(initialTask);
  const [editedTaskStatus, setEditedTaskStatus] = useState(initialStatus);

  useEffect(() => {
    setEditedTaskText(initialTask);
    setEditedTaskStatus(initialStatus);
  }, [initialTask, initialStatus]);

  const handleSave = () => {
    updateTask(id_task, editedTaskText, editedTaskStatus);
  };

  return (
    <div className="flex flex-row gap-2">
      <input
        type="text"
        className="border p-2 rounded text-black"
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
      <div className="flex gap-2 mt-2">
        <Button onClick={handleSave}>Guardar</Button>
        <Button variant="ghost" onClick={cancelEditing}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}
