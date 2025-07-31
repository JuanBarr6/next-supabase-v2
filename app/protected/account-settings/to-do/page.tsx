import { ListToDo } from "@/feature/protected/componets/sub-features/account-seetings/sub-features/to-do/components/list-to-do";

export default function ToDoPage() {
  return (
    <div className="p-6 text-black space-y-6">
      <h2 className="text-2xl font-bold">To-do</h2>
      <ListToDo />
    </div>
  );
}
