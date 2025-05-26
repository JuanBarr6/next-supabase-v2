import React from "react";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
import Avatar from "../avatar";
interface NavSectionsProps {
  avatarUrl: string;
  name: string;
  position?: string;
}

export default function InfoUser({
  avatarUrl,
  name,
  position,
}: NavSectionsProps) {
  return (
    <section className="self-start flex items-center gap-2 w-[180px] rounded-lg shadow-sm bg-white/5 hover:bg-primary-foreground/20 transition-colors duration-200 ease-in-out cursor-pointer">
      <Avatar
        src={avatarUrl}
        alt={name}
        className="w-[40px] h-[40px] rounded-full object-cover border-2 border-white-500"
      />
      <div className="flex flex-col">
        <Label className="text-primary-foreground text-[20px]">{name}</Label>
        <Label className="text-primary-foreground text-[11px]">
          {position}
        </Label>
        <span className="text-primary-foreground text-[11px]">
          ads@{name}.co
        </span>
      </div>
      <ChevronDown color="white" />
    </section>
  );
}
