"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface TaskModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (task: {
    name: string;
    done: boolean;
    date: Date | undefined;
  }) => void;
}

export function TaskModal({ open, onOpenChange, onSave }: TaskModalProps) {
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);
  const [date, setDate] = useState<Date>();

  const handleSave = () => {
    onSave({ name, done, date });
    setName("");
    setDone(false);
    setDate(undefined);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle>Nueva Tarea</DialogTitle>
        </DialogHeader>

        {/* Nombre */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Nombre</label>
          <Input
            placeholder="Nombre de la tarea"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Realizado */}
        <div className="flex items-center gap-2">
          <Checkbox
            id="done"
            checked={done}
            onCheckedChange={(val) => setDone(!!val)}
          />
          <label htmlFor="done" className="text-sm font-medium">
            Realizado
          </label>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Fecha</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Selecciona una fecha</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>
        </div>

        <Button onClick={handleSave} className="w-full mt-4">
          Guardar
        </Button>
      </DialogContent>
    </Dialog>
  );
}
