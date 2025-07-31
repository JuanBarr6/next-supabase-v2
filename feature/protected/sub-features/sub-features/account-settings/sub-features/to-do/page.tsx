import React from "react";
import TodoTable from "../../../../../../../../app/protected/account-settings/to-do/components/to-do/components/TodoTable";

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mis tareas</h1>
      <TodoTable />
    </main>
  );
}
