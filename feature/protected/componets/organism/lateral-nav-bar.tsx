import NavSections from "@/feature/protected/componets/molecule/nav-sections";
import { SquarePlus } from "lucide-react";

export default function LateralNavBar() {
  return (
    <div className="w-[200px] h-full p-4  flex flex-col gap-4 bg-primary">
      <NavSections Icon={SquarePlus} title="Create Contract" />
    </div>
  );
}
