import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { PencilLine } from "lucide-react";

const users = [
  {
    name: "Sergio Otálvaro González",
    position: "Aprendiz de desarrollo",
    location: "Armenia, Colombia",
  },
  {
    name: "Camila Rodríguez",
    position: "Diseñadora UX",
    location: "Medellín, Colombia",
  },
  {
    name: "Juan Pérez",
    position: "Ingeniero de software",
    location: "Bogotá, Colombia",
  },
  {
    name: "Laura Gómez",
    position: "Analista de datos",
    location: "Cali, Colombia",
  },
  {
    name: "Carlos Ramírez",
    position: "Product Manager",
    location: "Manizales, Colombia",
  },
  {
    name: "Ana Torres",
    position: "QA Tester",
    location: "Barranquilla, Colombia",
  },
];

export default function ProfileUsers() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 auto-rows-fr">
      {users.map((user, index) => (
        <div
          key={index}
          className="flex justify-between items-center w-full h-full p-3 border border-gray-200 rounded-md bg-white shadow-sm"
        >
          <div className="flex gap-3 items-center">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.name}`}
                alt={user.name}
              />
              <AvatarFallback className="text-lg">
                {user.name[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col text-primary-foreground">
              <Label className="text-xs font-semibold text-black">
                {user.name}
              </Label>
              <Label className="text-xs text-muted-foreground">
                {user.position}
              </Label>
              <Label className="text-xs text-muted-foreground">
                {user.location}
              </Label>
            </div>
          </div>
          <button className="flex items-center gap-1 px-2 py-1 text-xs rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 transition">
            Edit
            <PencilLine size={12} />
          </button>
        </div>
      ))}
    </div>
  );
}
