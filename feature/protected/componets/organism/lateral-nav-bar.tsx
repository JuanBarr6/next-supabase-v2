import NavSection from "@/feature/protected/componets/molecule/nav-sections";
import TeamHeader from "@/feature/protected/componets/molecule/team-header";
import {
  menuSections,
  organizationSections,
} from "@/feature/protected/utils/constants/nav-sections";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LateralNavBar() {
  return (
    <div className="w-[250px] h-full p-4 flex flex-col gap-4 bg-primary justify-between">
      <div>
        <TeamHeader />
      </div>

      <section className="flex flex-col gap-4 flex-grow">
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

      <Button variant="secondary">Create Contact +</Button>
    </div>
  );
}