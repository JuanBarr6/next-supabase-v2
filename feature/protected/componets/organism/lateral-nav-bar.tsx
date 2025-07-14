"use client";
import NavSection from "@/feature/protected/componets/molecule/nav-sections";
import { Menu } from "lucide-react";

import {
  menuSections,
  organizationSections,
} from "@/feature/protected/utils/constants/nav-sections";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LateralNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="md:hidden w-full bg-primary p-4">
        <div className="flex items-center justify-between">
          <Label className="text-primary-foreground font-bold">Menu</Label>
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="text-primary-foreground" />
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 h-auto space-y-4 overflow-x-auto text-primary-foreground gap-2">
            <div>
              <Label className="block mb-2 text-primary-foreground">Menu</Label>
              <div className="flex space-x-4 overflow-x-auto h-auto">
                {menuSections.map(({ Icon, title }) => (
                  <div key={title} className="flex flex-col items-center">
                    <Icon className="mb-1" />
                    <span className="text-xs">{title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="block mb-2 text-primary-foreground">
                Organizations
              </Label>
              <div className="flex space-x-4 overflow-x-auto">
                {organizationSections.map(({ Icon, title }) => (
                  <div
                    key={title}
                    className="flex flex-col items-center min-w-[80px]"
                  >
                    <Icon className="mb-1" />
                    <span className="text-sm">{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="hidden md:flex h-full p-4 flex-col gap-4 bg-primary justify-between w-1/6">
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
    </>
  );
}
