import NavBarSection from "@/feature/protected/componets/molecule/navBar-sections";
import { navBarSections } from "@/feature/protected/utils/constants/nav-sections";
import { Button } from "@/components/ui/button";

export default function InNavBar() {
  return (
    <div className="flex flex-row md:flex-col h-full min-w-max md:w-60 p-4 justify-between bg-white border-r-[2px] border-gray-200 shadow-[6px_0_10px_-4px_rgba(0,0,0,0.15)]">
      <div className="flex flex-row md:flex-col gap-3 items-center md:items-start text-center md:text-left">
        {navBarSections.map(({ title, href }) => (
          <NavBarSection key={title} title={title} href={href} />
        ))}
      </div>

      <div className="md:mt-auto flex justify-center pt-4">
        <Button
          variant="ghost"
          className="text-red-400 font-bold whitespace-nowrap"
        >
          Delete Account
        </Button>
      </div>
    </div>
  );
}
