import NavBarSection from "@/feature/protected/componets/molecule/navBar-sections";
import { navBarSections } from "@/feature/protected/utils/constants/nav-sections";
import { Button } from "@/components/ui/button";

export default function InNavBar() {
  return (
    <div className="w-1/6 h-full p-4 flex flex-col justify-between bg-white border-r-[2px] border-gray-200 shadow-[6px_0_10px_-4px_rgba(0,0,0,0.15)]">
      <div className="flex flex-col gap-3 items-center text-center">
        {navBarSections.map(({ title, href }) => (
          <NavBarSection key={title} title={title} href={href} />
        ))}
      </div>

      <div className="mt-auto flex justify-center pt-4">
        <Button variant="ghost" className="text-red-400 font-bold">
          Delete Account
        </Button>
      </div>
    </div>
  );
}
