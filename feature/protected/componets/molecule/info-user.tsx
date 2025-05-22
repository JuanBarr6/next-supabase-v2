import React from "react";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
interface NavSectionsProps {
  avatarUrl?: string;
  name: string;
}

export default function InfoUser({ avatarUrl, name }: NavSectionsProps) {
  return (
    <section className="flex items-center gap-2 w-full hover:bg-primary-foreground/20 transition-colors duration-200 ease-in-out cursor-pointer">
      <img
        src={avatarUrl}
        alt={name}
        className="w-6 h-6 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <Label className="text-primary-foreground text-xs">{name}</Label>
        <span className="text-primary-foreground text-xs">Hello@{name}.co</span>
      </div>
      <ChevronDown />
    </section>
  );
}
