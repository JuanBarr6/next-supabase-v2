import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";

export default function ProfileInfo() {
  const User = {
    name: "Sergio Otálvaro",
    email: "xergio1803@gmail.com",
  };

  return (
    <div className="flex p-2 rounded-md gap-2 items-center">
      <Avatar>
        <AvatarImage
          src={`https://api.dicebear.com/6.x/initials/svg?seed=${User.email}`}
          alt={User.email}
        />
        <AvatarFallback>{User.email[0].toUpperCase()}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col text-primary-foreground">
        <div className="flex items-center">
          <Label>{User.name}</Label>
          <ChevronDown size={18} />
        </div>
        <Label className="text-xs">{User.email}</Label>
      </div>
    </div>
  );
}
