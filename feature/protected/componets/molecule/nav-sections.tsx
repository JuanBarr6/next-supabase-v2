import React from "react";
import { Label } from "@/components/ui/label";

interface NavSectionsProps {
  Icon: React.ElementType;
  title: string;
}

export default function NavSection({ Icon, title }: NavSectionsProps) {
  return (
    <section className="flex items-center gap-2 px-4 py-1 rounded-sm  w-full hover:bg-primary-foreground/20 transition-colors duration-200 ease-in-out cursor-pointer">
      <Icon className="text-primary-foreground" />
      <Label className="text-primary-foreground">{title}</Label>
    </section>
  );
}
