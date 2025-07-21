import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { PencilLine } from "lucide-react";

export default function ProfileUser() {
  const User = {
    name: "Juan Sebastián Jurado Torres",
    position: "Aprendiz de desarrollo",
    location: "Manizales, Colombia",
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full md:w-3/4 mt-5 p-4 border border-gray-300 rounded-md bg-white shadow-md gap-4">
      <div className="flex items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage
            src="/hola.png" 
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

      <div className="self-end sm:self-center">
        <button className="flex items-center gap-1 px-3 py-2 text-sm rounded-full border border-gray-100 text-gray-700 hover:bg-gray-200 transition">
          Edit
          <PencilLine size={14} />
        </button>
      </div>
    </div>
  );
}
