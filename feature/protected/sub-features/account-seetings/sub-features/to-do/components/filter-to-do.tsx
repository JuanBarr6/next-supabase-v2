"use client";
import { Button } from "@/components/ui/button";
import { Calendar22 } from "../../../components/calendar";

interface FilterToDoProps {
  filterDate: Date | null;
  setFilterDate: (date: Date | null) => void;
}

export function FilterToDo({ filterDate, setFilterDate }: FilterToDoProps) {
  return (
    <div className="mt-5 mb-6 flex flex-col gap-2">
      <Calendar22
        placeholderText="Filtrar por fecha"
        onDateChange={(date: Date | undefined) => {
          setFilterDate(date ?? null);
        }}
      />
      {filterDate && (
        <Button variant="outline" onClick={() => setFilterDate(null)}>
          Limpiar filtro
        </Button>
      )}
    </div>
  );
}
