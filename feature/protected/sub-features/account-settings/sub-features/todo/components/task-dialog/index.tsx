"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import TaskForm from "@/feature/protected/sub-features/account-settings/sub-features/todo/components/task-dialog/task-form";

export default function TaskDialog() {
  const handleSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <Dialog open={true}>
      <DialogContent className="max-w-md sm:max-w-lg md:max-w-xl h-auto py-6">
        <DialogHeader>
          <DialogTitle>New Dialog</DialogTitle>
          <TaskForm onSubmit={handleSubmit} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
