"use client";

import { useState, useEffect, useRef } from "react";
import { useTasks, Task } from "./hooks/use-tasks";
import TaskTable from "./components/task-table";
import TaskForm from "./components/task-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { validateNewTask } from "./utils/task-validations";

export function TodoList() {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    error,
    searchTasks,
    isReady,
  } = useTasks();

  const [newTask, setNewTask] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [adding, setAdding] = useState(false);
  const [taskDate, setTaskDate] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");
  const [editingDone, setEditingDone] = useState(false);
  const [editing, setEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [filterDone, setFilterDone] = useState<"all" | "done" | "not_done">(
    "all",
  );
  const closeRef = useRef<HTMLButtonElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [filterDate, setFilterDate] = useState("");
  const [formErrors, setFormErrors] = useState<string[]>([]);

  useEffect(() => {
    if (modalOpen) {
      const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
      setTaskDate(today);
    }
  }, [modalOpen]);

  useEffect(() => {
    if (!isReady) return;

    const trimmedTerm = searchTerm.trim();

    const handler = setTimeout(() => {
      let filters: { nombre?: string; realizado?: boolean; fecha?: string } =
        {};

      if (trimmedTerm !== "") {
        filters.nombre = trimmedTerm;
      }

      if (filterDone === "done") {
        filters.realizado = true;
      } else if (filterDone === "not_done") {
        filters.realizado = false;
      }
      if (filterDate !== "") {
        filters.fecha = filterDate;
      }

      searchTasks(filters);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm, filterDone, searchTasks, filterDate, isReady]);

  const handleAdd = async () => {
    const { valid, errors } = validateNewTask(newTask);

    if (!valid) {
      setFormErrors(errors);
      return;
    }

    setFormErrors([]);
    setAdding(true);
    await addTask(newTask, isDone, taskDate);
    setNewTask("");
    setIsDone(false);
    setTaskDate("");
    setAdding(false);
    closeRef.current?.click();
  };

  const startEditing = (task: Task) => {
    setEditingId(task.id);
    setEditingText(task.nombre);
    setEditingDone(task.realizado);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingText("");
    setEditingDone(false);
  };

  const saveEditing = async () => {
    if (!editingId) return;
    setEditing(true);
    await updateTask(editingId, editingText, editingDone);
    setEditing(false);
    cancelEditing();
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    await deleteTask(id);
    setDeletingId(null);
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col">
      <div className="p-4 border-b bg-white z-10 sticky top-0">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Lista de Tareas</h1>

          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setModalOpen(true)}>Agregar tarea</Button>
            </DialogTrigger>

            <DialogContent className="max-w-md sm:max-w-lg md:max-w-xl h-auto py-6">
              <DialogHeader>
                <DialogTitle>Nueva Tarea</DialogTitle>
              </DialogHeader>

              <TaskForm
                newTask={newTask}
                isDone={isDone}
                setNewTask={setNewTask}
                setIsDone={setIsDone}
                onAdd={handleAdd}
                adding={adding}
                taskDate={taskDate}
                setTaskDate={setTaskDate}
                closeButtonRef={closeRef}
                formErrors={formErrors}
              />
            </DialogContent>
          </Dialog>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="flex items-end gap-4">
          <Input
            placeholder="Buscar tarea..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 max-w-[300px]"
          />

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Estado
            </label>
            <select
              value={filterDone}
              onChange={(e) =>
                setFilterDone(e.target.value as "all" | "done" | "not_done")
              }
              className="w-32 p-2 border rounded-md bg-white text-sm"
            >
              <option value="all">Todas</option>
              <option value="done">Completadas</option>
              <option value="not_done">Pendientes</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Fecha
            </label>
            <Input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="w-38"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <TaskTable
          tasks={tasks}
          editingId={editingId}
          editingText={editingText}
          editingDone={editingDone}
          deletingId={deletingId}
          editing={editing}
          setEditingText={setEditingText}
          setEditingDone={setEditingDone}
          startEditing={startEditing}
          cancelEditing={cancelEditing}
          saveEditing={saveEditing}
          handleDelete={handleDelete}
        />
      </div>

      {/*<TaskDialog />*/}
    </div>
  );
}
