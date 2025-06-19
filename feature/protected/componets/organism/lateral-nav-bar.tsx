import NavSection from "@/feature/protected/componets/molecule/nav-sections";
import {
  menuSections,
  organizationSections,
} from "@/feature/protected/utils/constants/nav-sections";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ProfileInfo from "../molecule/profile-info";

export default function LateralNavBar() {
  return (
    <div className="w-[200px] h-[720px] p-4 pb-[50px] flex flex-col justify-between bg-primary ">
      <div className="flex flex-col gap-4">
        <ProfileInfo />
        <section className="flex flex-col gap-4">
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
      </div>
      <div className="mt-auto">
        <Button variant="secondary">Create Contract +</Button>
      </div>
    </div>
  );
}
