import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableHead as Th,
} from "@/components/ui/table";
import TaskRow from "./task-row";
import { Task } from "../hooks/use-tasks";

interface TaskTableProps {
  tasks: Task[];
  editingId: string | null;
  editingText: string;
  editingDone: boolean;
  deletingId: string | null;
  editing: boolean;
  setEditingText: (val: string) => void;
  setEditingDone: (val: boolean) => void;
  startEditing: (task: Task) => void;
  cancelEditing: () => void;
  saveEditing: () => void;
  handleDelete: (id: string) => void;
}

export default function TaskTable({
  tasks,
  editingId,
  editingText,
  editingDone,
  deletingId,
  editing,
  setEditingText,
  setEditingDone,
  startEditing,
  cancelEditing,
  saveEditing,
  handleDelete,
}: TaskTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <Th>Id</Th>
          <Th>Tarea</Th>
          <Th>Fecha</Th>
          <Th className="text-center">Realizado</Th>
          <Th className="text-center">Acciones</Th>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task, index) => (
          <TaskRow
            key={task.id}
            task={task}
            index={index}
            isEditing={editingId === task.id}
            editingText={editingText}
            editingDone={editingDone}
            deleting={deletingId === task.id}
            onStartEdit={() => startEditing(task)}
            onChangeText={setEditingText}
            onChangeDone={setEditingDone}
            onSave={saveEditing}
            onCancel={cancelEditing}
            onDelete={() => handleDelete(task.id)}
            editingInProgress={editing}
          />
        ))}
      </TableBody>
    </Table>
  );
}
