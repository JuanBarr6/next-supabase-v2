import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { PencilLine } from "lucide-react";

export default function ProfileUser() {
  const User = {
    name: "Sergio Otálvaro González",
    position: "Aprendiz de desarrollo",
    location: "Armenia, Colombia",
  };

  return (
    <div className="relative w-3/4 mt-5 p-4 border border-gray-300 rounded-md bg-white shadow-md">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex flex-col items-start text-left gap-2 flex-1 min-w-0 sm:min-w-[200px] sm:flex-row sm:items-center sm:text-left sm:gap-4">
          <Avatar className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
            <AvatarImage
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${User.name}`}
              alt={User.name}
            />
            <AvatarFallback className="text-lg sm:text-xl">
              {User.name[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col text-primary-foreground flex-1 min-w-0 sm:min-w-[120px]">
            <Label className="text-base sm:text-lg font-bold text-black leading-tight break-words line-clamp-2 block overflow-hidden w-full">
              {User.name}
            </Label>
            <Label className="text-xs sm:text-sm text-muted-foreground">
              {User.position}
            </Label>
            <Label className="text-xs sm:text-sm text-muted-foreground">
              {User.location}
            </Label>
          </div>
        </div>

        <div className="self-start sm:self-auto sm:ml-auto">
          <button className="flex items-center gap-1 px-3 py-2 text-xs sm:text-sm rounded-full border border-gray-100 text-gray-700 hover:bg-gray-200 transition">
            Edit
            <PencilLine size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
