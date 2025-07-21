import { Label } from "@/components/ui/label";
import { PencilLine } from "lucide-react";

export default function PersonalInfo() {
  const User = {
    name: "Juan Sebastián Jurado Torres",
    firstName: "Juan Sebastián",
    lastName: "Jurado Torres",
    position: "Aprendiz de desarrollo",
    location: "Manizales. Colombia",
    email: "juansebastianjuradotorres@gmail.com",
    phone: "3126585432",
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start w-full md:w-3/4 relative mt-5 p-4 border border-gray-300 rounded-md bg-white shadow-md gap-4">
      <div className="flex flex-col text-primary-foreground w-full">
        <Label className="text-lg font-bold text-black mb-4">
          Personal Information
        </Label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">First Name</p>
            <Label className="text-sm text-muted-foreground break-words">
              {User.firstName}
            </Label>
          </div>
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">Last Name</p>
            <Label className="text-sm text-muted-foreground break-words">
              {User.lastName}
            </Label>
          </div>
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">Email address</p>
            <Label className="text-sm text-muted-foreground break-all">
              {User.email}
            </Label>
          </div>
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">Phone</p>
            <Label className="text-sm text-muted-foreground break-words">
              {User.phone}
            </Label>
          </div>
          <div className="sm:col-span-2 min-w-0">
            <p className="text-sm text-muted-foreground">Bio</p>
            <Label className="text-sm text-muted-foreground break-words">
              {User.position}
            </Label>
          </div>
        </div>
      </div>

      <div className="self-end md:self-start">
        <button className="flex items-center gap-1 px-3 py-2 text-sm rounded-full border border-gray-100 text-gray-700 hover:bg-gray-200 transition">
          Edit
          <PencilLine size={14} />
        </button>
      </div>
    </div>
  );
}
  