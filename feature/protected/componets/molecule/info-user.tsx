import React from "react";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
interface NavSectionsProps {
  avatar: string;
  name: string;
  role?: string;
  location?: string;
}

export default function NavSection({
  avatar,
  name,
  role,
  location,
}: NavSectionsProps) {
  return (
    <section className="flex items-center gap-3 w-full hover:bg-primary-foreground/20 transition-colors duration-200 ease-in-out cursor-pointer p-2 rounded-md">
      <img
        src={avatar || "/placeholder.svg"}
        alt="user"
        className="rounded-full w-10 h-10 object-cover flex-shrink-0"
      />
      <div className="flex flex-col flex-1 min-w-0">
        <Label className="text-primary-foreground font-medium text-sm truncate">
          {name}
        </Label>
        {role && (
          <Label className="text-primary-foreground/70 text-xs truncate">
            {role}
          </Label>
        )}
        {location && (
          <Label className="text-primary-foreground/60 text-xs truncate">
            {location}
          </Label>
        )}
      </div>
      <ChevronDown className="text-primary-foreground/70 w-4 h-4 flex-shrink-0" />
    </section>
  );
}
