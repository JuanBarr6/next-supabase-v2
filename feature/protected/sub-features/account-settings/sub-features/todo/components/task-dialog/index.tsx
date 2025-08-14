import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import TaskForm from "@/feature/protected/sub-features/account-settings/sub-features/todo/components/task-dialog/task-form";

export default function TaskDialog() {
  return (
    <Dialog open={true}>
      <DialogContent className="max-w-md sm:max-w-lg md:max-w-xl h-auto py-6">
        <DialogHeader>
          <DialogTitle>New Dialog</DialogTitle>
          <TaskForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
