import React from "react";
import { Label } from "@/components/ui/label";

interface NavSectionsProps {
  Icon: React.ElementType;
  title: string;
}

export default function NavSections({ Icon, title }: NavSectionsProps) {
  return (
    <section className="flex items-center gap-2 w-full">
      <Icon className="bg-white" />
      <Label className="text-blue-600">{title}</Label>
    </section>
  );
}
