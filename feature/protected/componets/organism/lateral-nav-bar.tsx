import NavSection from "@/feature/protected/componets/molecule/nav-sections";
import ProfileInfo from "../../sub-features/account-settings/sub-features/utils/constants/profile-info";
import {
  menuSections,
  organizationSections,
} from "@/feature/protected/utils/constants/nav-sections";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LateralNavBar() {
  return (
    <div className="lg:h-full p-2 lg:p-4 flex flex-col gap-2 bg-primary justify-between w-full lg:w-auto">
      <div className="hidden lg:block">
        <ProfileInfo />
      </div>

      <section className="flex lg:flex-col gap-2 p-2 lg:p-4 scrollbar-none overflow-y-auto">
        <div className="flex flex-col lg:flex-col w-full">
          <div className="flex flex-col lg:flex-col">
            <Label className="text-primary-foreground mt-2 lg:mt-4 hidden lg:block">
              Menu
            </Label>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto py-1 scrollbar-none">
              {menuSections.map(({ Icon, title }) => (
                <NavSection key={title} Icon={Icon} title={title} />
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-col mt-2 lg:mt-4">
            <Label className="text-primary-foreground mt-2 lg:mt-4 hidden lg:block">
              Organizations
            </Label>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto py-1 scrollbar-none">
              {organizationSections.map(({ Icon, title }) => (
                <NavSection key={title} Icon={Icon} title={title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Button variant="secondary" className="hidden lg:block">
        Create Contract +
      </Button>
    </div>
  );
}
