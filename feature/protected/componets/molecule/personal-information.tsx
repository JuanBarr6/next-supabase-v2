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
    <div className="flex justify-between items-start w-[700px] ml-[300px] relative mt-5 p-4 border border-gray-300 rounded-md bg-white shadow-md">
      <div className="flex flex-col text-primary-foreground w-full">
        <Label className="text-lg font-bold text-black text-[16px] mb-4">
          Personal Information
        </Label>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          <div>
            <p className="text-sm text-muted-foreground">First Name</p>
            <Label className="text-sm text-muted-foreground">
              {User.firstName}
            </Label>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Last Name</p>
            <Label className="text-sm text-muted-foreground">
              {User.lastName}
            </Label>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email address</p>
            <Label className="text-sm text-muted-foreground">
              {User.email}
            </Label>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <Label className="text-sm text-muted-foreground">
              {User.phone}
            </Label>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-muted-foreground">Bio</p>
            <Label className="text-sm text-muted-foreground">
              {User.position}
            </Label>
          </div>
        </div>
      </div>
      <button className="flex items-center gap-1 px-3 py-2 text-sm rounded-full border border-gray-100 text-gray-700 hover:bg-gray-200 transition self-start">
        Edit
        <PencilLine size={14} />
      </button>
    </div>
  );
}
