import NavBarSection from "@/feature/protected/componets/molecule/navBar-sections";
import { navBarSections } from "@/feature/protected/utils/constants/nav-sections";
import { Button } from "@/components/ui/button";

export default function InNavBar() {
  return (
    <div className="w-[200px] h-[420px] p-4 flex flex-col justify-between bg-white rounded-2xl shadow-md">
      <div className="flex flex-col gap-4 items-center text-center">
        {navBarSections.map(({ title }) => (
          <NavBarSection key={title} title={title} />
        ))}
      </div>
      <div className="mt-auto flex justify-center">
        <Button variant="ghost" className="text-red-400 font-bold">
          Delete Account
        </Button>
      </div>
    </div>
  );
}
