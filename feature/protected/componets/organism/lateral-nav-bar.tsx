import NavSection from "@/feature/protected/componets/molecule/nav-sections";
import { default as UserSection } from "@/feature/protected/componets/molecule/info-user";
import {
  menuSections,
  organizationSections,
  userAvatar,
  userName,
  userLocation,
  userRole,
} from "@/feature/protected/utils/constants/nav-sections";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LateralNavBar() {
  return (
    <div className="w-[200px] h-full p-4  flex flex-col gap-4 bg-primary justify-between">
      <section className="flex flex-col gap-4 ">
        <UserSection
          avatar={userAvatar}
          name={userName}
          role={userRole}
          location={userLocation}
        />
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
