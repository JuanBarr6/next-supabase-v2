import { Label } from "@/components/ui/label";
import { PencilLine } from "lucide-react";

export default function Address() {
  const User = {
    country: "Colombia",
    city: "Manizales",
    postalCode: "170001",
    taxId: "2312345678-9",
  };

  return (
    <div className="flex flex-col md:flex-row justify-between relative items-start w-full md:w-3/4 mt-5 p-4 border border-gray-300 rounded-md bg-white shadow-md">
      <div className="flex flex-col text-primary-foreground w-full">
        <Label className="text-lg font-bold text-black mb-4">Address</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          <div>
            <p className="text-sm text-muted-foreground">Country</p>
            <Label className="text-sm text-muted-foreground">
              {User.country}
            </Label>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">City</p>
            <Label className="text-sm text-muted-foreground">{User.city}</Label>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Postal Code</p>
            <Label className="text-sm text-muted-foreground">
              {User.postalCode}
            </Label>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">TAX ID</p>
            <Label className="text-sm text-muted-foreground">
              {User.taxId}
            </Label>
          </div>
        </div>
      </div>
      <button className="mt-4 md:mt-0 md:ml-4 flex items-center gap-1 px-3 py-2 text-sm rounded-full border border-gray-100 text-gray-700 hover:bg-gray-200 transition self-start">
        Edit
        <PencilLine size={14} />
      </button>
    </div>
  );
}
