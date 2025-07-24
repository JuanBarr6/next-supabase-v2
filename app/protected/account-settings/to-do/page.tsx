import { ListToDo } from "@/feature/protected/componets/sub-features/account-seetings/sub-features/to-do/list-to-do";
import { ColumnDef } from "@tanstack/react-table";

type ToDo = {
  id: number;
  task: string;
  status: string;
};

const columns: ColumnDef<ToDo>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "task",
    header: "Tarea",
  },
  {
    accessorKey: "status",
    header: "Estado",
  },
];

const data: ToDo[] = [
  { id: 1, task: "Maquetacion To-do", status: "completado" },
  { id: 2, task: "Tarea con supabase", status: "pendiente" },
];

export default function ToDoPage() {
  return (
    <div className="p-6 text-black space-y-6">
      <h2 className="text-2xl font-bold">To-do</h2>
      <ListToDo columns={columns} data={data} />
    </div>
  );
}
