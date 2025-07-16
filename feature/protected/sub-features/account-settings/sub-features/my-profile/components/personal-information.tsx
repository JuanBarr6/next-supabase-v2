import { Label } from "@/components/ui/label";
import { PencilLine } from "lucide-react";

export default function PersonalInfo() {
  const User = {
    name: "Sergio Otálvaro González",
    firstName: "Sergio",
    lastName: "Otálvaro González",
    position: "Aprendiz de desarrollo",
    location: "Armenia, Colombia",
    email: "xergio1803@gmail.com",
    phone: "3186892062",
  };

  return (
    <div className="relative w-3/4 mt-5 p-4 border border-gray-300 rounded-md bg-white shadow-md">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div className="flex flex-col text-primary-foreground flex-1 min-w-0 sm:min-w-[200px]">
          <Label className="text-base sm:text-lg font-bold text-black mb-4">
            Personal Information
          </Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-4">
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-muted-foreground">
                First Name
              </p>
              <Label className="text-xs sm:text-sm text-muted-foreground break-words block overflow-hidden">
                {User.firstName}
              </Label>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Last Name
              </p>
              <Label className="text-xs sm:text-sm text-muted-foreground break-words block overflow-hidden">
                {User.lastName}
              </Label>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Email address
              </p>
              <Label className="text-xs sm:text-sm text-muted-foreground break-words block overflow-hidden">
                {User.email}
              </Label>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-muted-foreground">Phone</p>
              <Label className="text-xs sm:text-sm text-muted-foreground break-words block overflow-hidden">
                {User.phone}
              </Label>
            </div>
            <div className="col-span-1 sm:col-span-2 min-w-0">
              <p className="text-xs sm:text-sm text-muted-foreground">Bio</p>
              <Label className="text-xs sm:text-sm text-muted-foreground break-words block overflow-hidden">
                {User.position}
              </Label>
            </div>
          </div>
        </div>
        <div className="self-start sm:self-auto sm:ml-auto flex-shrink-0">
          <button className="flex items-center gap-1 px-3 py-2 text-xs sm:text-sm rounded-full border border-gray-100 text-gray-700 hover:bg-gray-200 transition">
            Edit
            <PencilLine size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
