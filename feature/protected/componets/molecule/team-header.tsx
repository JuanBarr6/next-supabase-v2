import React from "react";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TeamHeader() {
  return (
    <div className="flex items-center gap-3 rounded-xl p-4 bg-muted shadow-sm w-fit">
      <Avatar>
        <AvatarImage src="/logo.png" alt="Fillo Team" />
        <AvatarFallback>FT</AvatarFallback>
      </Avatar>
      <div className="flex flex-col text-left">
        <span className="text-sm font-medium text-foreground">Fillo Team</span>
        <span className="text-xs text-muted-foreground">hello@fillio.com</span>
      </div>
      <ChevronDown className="ml-auto h-4 w-4 text-muted-foreground" />
    </div>
  );
}
