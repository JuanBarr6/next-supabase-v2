import React from "react";
import { Label } from "@/components/ui/label";

interface NavSectionsProps {
  title: string;
}

export default function NavBarSection({ title }: NavSectionsProps) {
  return (
    <section className="flex items-center gap-2 w-full">
      <Label className="text-gray-500 hover:text-blue-600 hover:bg-blue-100 transition-colors duration-200 ease-in-out cursor-pointer px-3 py-2 rounded-2xl">
        {title}
      </Label>
    </section>
  );
}
