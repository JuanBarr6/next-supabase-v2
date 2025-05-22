import React from "react";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
interface NavSectionsProps {
  avatar: string;
  name: string;
}

export default function NavSection({ avatar, name }: NavSectionsProps) {
  return (
    <section className="flex items-center gap-2 w-full hover:bg-primary-foreground/20 transition-colors duration-200 ease-in-out cursor-pointer">
      <img
        src={avatar}
        alt="user"
        className="rounded-full w-8 h-8 object-cover"
      />
      <Label className="text-primary-foreground">{name}</Label>
      <ChevronDown className="text-primary-foreground" />
    </section>
  );
}