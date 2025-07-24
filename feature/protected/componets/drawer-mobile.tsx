"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import LateralNavBar from "@/feature/protected/componets/organism/lateral-nav-bar";

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <div className="w-full p-4 flex justify-between items-center">
        <Button variant="ghost" onClick={() => setIsOpen(true)}>
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent
          data-vaul-drawer-direction="top"
          className="p-0 h-[32%] overflow-y-auto"
        >
          <DrawerHeader>
            <DrawerTitle className="sr-only">Navigation Drawer</DrawerTitle>
          </DrawerHeader>

          <LateralNavBar />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
