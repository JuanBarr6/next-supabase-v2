/*"use client";

import { useState } from "react";
import { Task } from "../hooks/Tasktype";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { supabase } from "@/utils/supabase/client";

interface TaskModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved?: () => void;
}

export function TaskModal({ open, onOpenChange, onSaved }: TaskModalProps) {
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("pendiente");
  const [date, setDate] = useState<Date>();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!descripcion || !date) return;

    setLoading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error("Usuario no autenticado");

      let fotoUrl: string | null = null;
      if (file) {
        const filePath = `tareas/${user.id}/${Date.now()}-${file.name}`;
        const { data, error } = await supabase.storage
          .from("tareas")
          .upload(filePath, file);

        if (error) throw error;

        const { data: publicUrl } = supabase.storage
          .from("tareas")
          .getPublicUrl(data.path);

        fotoUrl = publicUrl.publicUrl;
      }

      const { error: insertError } = await supabase.from("tareas").insert([
        {
          user_id: user.id,
          descripcion,
          estado,
          fecha_a_realizar: date.toISOString().split("T")[0],
          fotos: fotoUrl ? [fotoUrl] : [],
        },
      ]);

      if (insertError) throw insertError;

      setDescripcion("");
      setEstado("pendiente");
      setDate(undefined);
      setFile(null);
      onOpenChange(false);
      onSaved?.();
    } catch (err) {
      console.error("Error guardando tarea:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle>Nueva Tarea</DialogTitle>
        </DialogHeader>

        <div className="space-y-2">
          <label className="text-sm font-medium">Descripción</label>
          <Input
            placeholder="Descripción de la tarea"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Estado</label>
          <select
            className="w-full border rounded-md p-2"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="pendiente">Pendiente</option>
            <option value="en_progreso">En progreso</option>
            <option value="completado">Completado</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Fecha a realizar</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date
                  ? format(date, "d 'de' MMMM", { locale: es })
                  : "Selecciona una fecha"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Adjuntar foto</label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>

        <Button onClick={handleSave} disabled={loading} className="w-full mt-4">
          {loading ? "Guardando..." : "Guardar"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
*/