import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/next-supabase-v2/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";

export default function ProfileInfo() {
  const User = {
    name: "Juan Sebastián Jurado Torres",
    email: "juradojuan244@gmail.com",
  };

  return (
    <div className="flex p-2 rounded-md gap-2 items-start w-full">
      <Avatar>
        <AvatarImage src="/hola.png" alt={User.email} />
        <AvatarFallback>{User.email[0].toUpperCase()}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col text-primary-foreground min-w-0 w-full">
        <div className="flex items-start justify-between w-full gap-2 flex-wrap">
          <Label className="text-sm break-words whitespace-normal">
            {User.name}
          </Label>
          <ChevronDown size={18} className="shrink-0" />
        </div>
        <Label className="text-xs break-all whitespace-normal block w-full">
          {User.email}
        </Label>
      </div>
    </div>
  );
}
