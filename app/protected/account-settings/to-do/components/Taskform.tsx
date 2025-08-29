"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";

import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface TaskFormProps {
  onAdd: (task: string, status: string, dueDate?: Date) => void;
  filterDate: Date | undefined;
  setFilterDate: (date: Date | undefined) => void;
}


const formSchema = z.object({
  task: z.string().min(1, "La tarea es obligatoria"),
  status: z.enum(["pendiente", "completada"]),
  dueDate: z.date().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function TaskForm({ onAdd, filterDate, setFilterDate }: TaskFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
      status: "pendiente",
      dueDate: new Date(),
    },
  });

  const onSubmit = (values: FormValues) => {
    onAdd(values.task, values.status, values.dueDate);
    form.reset({ task: "", status: "pendiente", dueDate: new Date() });
  };

  return (
    <div>
     
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Lista de Tareas</h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-2 w-full sm:w-auto items-center flex-wrap"
          >
            
            <FormField
              control={form.control}
              name="task"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nueva tarea</FormLabel>
                  <FormControl>
                    <Input placeholder="Escribe una tarea..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="border p-2 rounded text-black"
                    >
                      <option value="pendiente">Pendiente</option>
                      <option value="completada">Completada</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

           
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fecha límite</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-[200px] justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value
                            ? format(field.value, "PPP", { locale: es })
                            : "Elegir fecha"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                          locale={es}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Agregar</Button>
          </form>
        </Form>
      </div>

      {/* Filtro por fecha */}
      <div className="mb-6 flex items-center gap-2">
        <label className="font-medium">Filtrar por fecha:</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn("w-[200px] justify-start text-left font-normal")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {filterDate
                ? format(filterDate, "PPP", { locale: es })
                : "Seleccionar fecha"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={filterDate}
              onSelect={setFilterDate}
              initialFocus
              locale={es}
            />
          </PopoverContent>
        </Popover>
        {filterDate && (
          <Button variant="ghost" onClick={() => setFilterDate(undefined)}>
            Quitar filtro
          </Button>
        )}
      </div>
    </div>
  );
}
