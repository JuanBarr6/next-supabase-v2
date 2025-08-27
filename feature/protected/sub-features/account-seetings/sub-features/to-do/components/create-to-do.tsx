"use client";
import { Button } from "@/components/ui/button";
import { Calendar22 } from "../../../components/calendar";

interface CreateToDoProps {
  task: string;
  setTask: (task: string) => void;
  status: string;
  setStatus: (status: string) => void;
  executionDate: Date | undefined;
  setExecutionDate: (date: Date | undefined) => void;
  errors: {
    description?: string;
    status?: string;
    date?: string;
  };
  onSave: () => void;
}

export function CreateToDo({
  task,
  setTask,
  status,
  setStatus,
  setExecutionDate,
  errors,
  onSave,
}: CreateToDoProps) {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="mb-4 flex flex-col gap-2">
        <input
          type="text"
          placeholder="Nombre de la tarea"
          className="border p-2 rounded text-black"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description}</p>
        )}

        <select
          className="border p-2 rounded text-black"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Selecciona estado</option>
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        {errors.status && (
          <p className="text-red-500 text-sm">{errors.status}</p>
        )}

        <Calendar22
          placeholderText="Fecha a realizar tarea"
          onValueChange={setExecutionDate}
          value={undefined}
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}

        <Button onClick={onSave}>Guardar tarea</Button>
      </div>
    </div>
  );
}
