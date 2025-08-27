import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SquarePlus } from "lucide-react";
import TaskForm from "./task-form";

export default function CreateTaskModal() {
  const handleSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
  };
  return (
    <Dialog>
      {/* <form> */}
      <DialogTrigger asChild className="mt-5">
        {/* <Button variant="outline"> */}
        <SquarePlus size={25} className="text-black-500 cursor-pointer" />
        {/* </Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crear nueva tarea</DialogTitle>
          <TaskForm onSubmit={handleSubmit} zIndex={50} />
        </DialogHeader>

        <div className="grid gap-4">
          {/* <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div> */}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          {/* <Button type="submit">Guardar tarea</Button> */}
        </DialogFooter>
      </DialogContent>

      {/* </form> */}
    </Dialog>
  );
}
