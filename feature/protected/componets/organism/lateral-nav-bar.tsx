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
    <div className="h-full p-4 flex flex-col gap-4 bg-primary justify-between w-1/6">
      <ProfileInfo />
      <section className="flex flex-col gap-4 p-4 scrollbar-none scrollbar overflow-y-auto">
        <Label className="text-primary-foreground mt-4">Menu</Label>
        <section className="flex flex-col gap-4 w-full">
          {menuSections.map(({ Icon, title }) => (
            <NavSection key={title} Icon={Icon} title={title} />
          ))}
        </section>
        <Label className="text-primary-foreground mt-4">Organizations</Label>
        <section className="flex flex-col gap-4 w-full">
          {organizationSections.map(({ Icon, title }) => (
            <NavSection key={title} Icon={Icon} title={title} />
          ))}
        </section>
      </section>
      <Button variant="secondary">Create Contract +</Button>
    </div>
  );
}
