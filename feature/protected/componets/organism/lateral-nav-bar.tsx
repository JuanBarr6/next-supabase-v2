/*"use client";

import { useState } from "react";
import NavSection from "@/feature/protected/componets/molecule/nav-sections";
import ProfileInfo from "../../sub-features/account-settings/sub-features/utils/constants/profile-info";
import {
  menuSections,
  organizationSections,
} from "@/feature/protected/utils/constants/nav-sections";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/next-supabase-v2/components/ui/sheet";
import { Menu } from "lucide-react";

export default function LateralNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
              <Menu className="text-primary" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="p-4 w-64 bg-primary text-white overflow-y-auto max-h-screen"
          >
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="mt-4 space-y-6">
              <ProfileInfo />

              <div>
                <Label className="text-white">Menu</Label>
                <div className="flex flex-col gap-2 mt-2">
                  {menuSections.map(({ Icon, title }) => (
                    <NavSection key={title} Icon={Icon} title={title} />
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-white">Organizations</Label>
                <div className="flex flex-col gap-2 mt-2">
                  {organizationSections.map(({ Icon, title }) => (
                    <NavSection key={title} Icon={Icon} title={title} />
                  ))}
                </div>
              </div>

              <Button
                variant="secondary"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Create Contract +
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <aside className="hidden lg:flex flex-col h-screen w-1/6 p-4 gap-4 bg-primary justify-between text-white">
        <div>
          <ProfileInfo />
        </div>

        <section className="flex flex-col gap-4 p-2 overflow-y-auto max-h-full">
          <Label className="text-white">Menu</Label>
          <div className="flex flex-col gap-2">
            {menuSections.map(({ Icon, title }) => (
              <NavSection key={title} Icon={Icon} title={title} />
            ))}
          </div>

          <Label className="text-white mt-4">Organizations</Label>
          <div className="flex flex-col gap-2">
            {organizationSections.map(({ Icon, title }) => (
              <NavSection key={title} Icon={Icon} title={title} />
            ))}
          </div>
        </section>

        <Button variant="secondary" className="w-full mt-auto">
          Create Contract +
        </Button>
      </aside>
    </>
  );
}
*/