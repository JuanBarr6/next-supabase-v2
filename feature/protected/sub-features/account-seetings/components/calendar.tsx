"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "@/components/ui/popover";

interface Calendar22Props {
  placeholderText?: string;
  onValueChange: (date: Date | undefined) => void;
  value?: Date | undefined;
}

export function Calendar22({
  placeholderText = "Seleccionar fecha",
  // onDateChange,
  onValueChange,
  value,
}: Calendar22Props) {
  const [open, setOpen] = React.useState(false);
  // const [date, setDate] = React.useState<Date | undefined>(undefined);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    console.log("selected date", selectedDate);
    onValueChange(selectedDate);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverAnchor>
        <Button
          onClick={() => setOpen(!open)}
          variant="outline"
          type="button"
          className="w-full justify-between font-normal"
        >
          {value ? value.toISOString() : placeholderText}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverAnchor>
      <PopoverContent>
        <Calendar
          mode="single"
          selected={value}
          captionLayout="dropdown"
          onSelect={handleDateSelect}
        />
      </PopoverContent>
    </Popover>
  );
}
