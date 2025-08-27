"use client";

import * as React from "react";
import { CalendarIcon, ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverPortal } from "@radix-ui/react-popover";

interface Calendar22Props {
  placeholderText?: string;
  // onDateChange?: (date: Date | undefined) => void;
  onValueChange?: (date: Date | undefined) => void;
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
    // setDate(selectedDate);
    setOpen(false);

    // if (onDateChange) {
    //   onDateChange(selectedDate);
    // }
  };

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
          >
            {/* {date ? date.toLocaleDateString() : placeholderText} */}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverPortal>
          <PopoverContent
            className="z-[9999] w-auto overflow-hidden p-0"
            align="start"
          >
            <Calendar
              mode="single"
              selected={value}
              captionLayout="dropdown"
              onSelect={onValueChange}
              className="z-[9999]"
            />
          </PopoverContent>
        </PopoverPortal>
      </Popover>
    </div>
  );
}
