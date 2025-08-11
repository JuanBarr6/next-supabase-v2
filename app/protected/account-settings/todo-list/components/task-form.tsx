import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogClose } from "@/components/ui/dialog";
import { RefObject } from "react";

interface TaskFormProps {
  newTask: string;
  isDone: boolean;
  setNewTask: (val: string) => void;
  setIsDone: (val: boolean) => void;
  onAdd: () => void;
  adding: boolean;
  taskDate: string;
  setTaskDate: (val: string) => void;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
  formErrors?: string[];
}

export default function TaskForm({
  newTask,
  isDone,
  setNewTask,
  setIsDone,
  onAdd,
  adding,
  taskDate,
  setTaskDate,
  closeButtonRef,
  formErrors = [],
}: TaskFormProps) {
  return (
    <div className="flex flex-col gap-4">
      {formErrors.length > 0 && (
        <div className="bg-red-100 text-red-700 p-2 rounded text-sm">
          {formErrors.map((err, idx) => (
            <p key={idx}>• {err}</p>
          ))}
        </div>
      )}

      <Input
        placeholder="Nueva tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <div className="flex flex-wrap items-center gap-4">
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

        <Input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
          className="w-40"
        />

        <Button onClick={onAdd} disabled={adding} className="cursor-pointer">
          {adding ? "Agregando..." : "Agregar"}
        </Button>

        <DialogClose asChild>
          <Button
            variant="secondary"
            ref={closeButtonRef}
            className="cursor-pointer"
          >
            Cerrar
          </Button>
        </DialogClose>
      </div>
    </div>
  );
}
