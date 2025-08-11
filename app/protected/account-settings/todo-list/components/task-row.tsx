import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Task {
  id: string;
  nombre: string;
  realizado: boolean;
  fecha?: string;
}

interface TaskRowProps {
  task: Task;
  index: number;
  isEditing: boolean;
  editingText: string;
  editingDone: boolean;
  deleting: boolean;
  onStartEdit: () => void;
  onChangeText: (val: string) => void;
  onChangeDone: (val: boolean) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
  editingInProgress: boolean;
}

export default function TaskRow({
  task,
  index,
  isEditing,
  editingText,
  editingDone,
  deleting,
  onStartEdit,
  onChangeText,
  onChangeDone,
  onSave,
  onCancel,
  onDelete,
  editingInProgress,
}: TaskRowProps) {
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>
        {isEditing ? (
          <Input
            value={editingText}
            onChange={(e) => onChangeText(e.target.value)}
          />
        ) : (
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="truncate max-w-[200px]">{task.nombre}</div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{task.nombre}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </TableCell>
      <TableCell className="text-center">
        {isEditing ? (
          <Checkbox
            checked={editingDone}
            onCheckedChange={(checked) => onChangeDone(!!checked)}
          />
        ) : task.realizado ? (
          "✅"
        ) : (
          "❌"
        )}
      </TableCell>
      <TableCell>{task.fecha || "—"}</TableCell>
      <TableCell className="text-center">
        {isEditing ? (
          <div className="flex gap-2 justify-center">
            <Button
              size="sm"
              onClick={onSave}
              disabled={editingInProgress}
              className="cursor-pointer"
            >
              {editingInProgress ? "Guardando..." : "Guardar"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={onCancel}
              disabled={editingInProgress}
              className="cursor-pointer"
            >
              Cancelar
            </Button>
          </div>
        ) : (
          <div className="flex gap-2 justify-center">
            <Button
              size="sm"
              variant="outline"
              onClick={onStartEdit}
              className="cursor-pointer"
            >
              Editar
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={onDelete}
              disabled={deleting}
              className="cursor-pointer"
            >
              {deleting ? "Eliminando..." : "Eliminar"}
            </Button>
          </div>
        )}
      </TableCell>
    </TableRow>
  );
}
