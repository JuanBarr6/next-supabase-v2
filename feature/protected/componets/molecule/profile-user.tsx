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
    <div className="flex justify-between items-center w-[700px] ml-[100px] mt-5 relative p-4 border border-gray-300 rounded-md bg-white shadow-md">
      <div className="flex gap-4 items-center">
        <Avatar className="w-16 h-16">
          <AvatarImage
            src={`https://api.dicebear.com/6.x/initials/svg?seed=${User.name}`}
            alt={User.name}
          />
          <AvatarFallback className="text-xl">
            {User.name[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col text-primary-foreground">
          <Label className="text-lg font-bold text-black">{User.name}</Label>
          <Label className="text-sm text-muted-foreground">
            {User.position}
          </Label>
          <Label className="text-sm text-muted-foreground">
            {User.location}
          </Label>
        </div>
      </div>
      <button className="flex items-center gap-1 px-3 py-2 text-sm rounded-full border border-gray-100 text-gray-700 hover:bg-gray-200 transition">
        Edit
        <PencilLine size={14} />
      </button>
    </div>
  );
}
