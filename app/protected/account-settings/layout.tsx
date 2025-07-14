"use client";
import { usePathname } from "next/navigation";
import { Label } from "@/components/ui/label";
import AccountSettingSection from "@/feature/protected/componets/sub-features/account-seetings/components/nav-account-setting-section";
import { menuSectionsAccountSettings } from "@/feature/protected/componets/sub-features/account-seetings/utils/constants/nav-account-settings";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function AccountSettings({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex bg-white h-full w-full flex-col gap-5">
      <div className="md:hidden px-4">
        <div className="flex items-center justify-between mb-2">
          <Label className="text-2xl">Account Settings</Label>
          <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {menuOpen && (
          <div className="flex flex-row gap-2 overflow-x-auto whitespace-nowrap">
            {menuSectionsAccountSettings.map(({ title, rute }) => (
              <AccountSettingSection
                key={title}
                title={title}
                rute={rute}
                selected={pathname === rute}
              />
            ))}
          </div>
        )}
      </div>

      <Label className="hidden md:block text-2xl">Account Settings</Label>
      <div className="flex flex-row overflow-y-auto overflow-x-auto scrollbar-none gap-3">
        <section className="hidden md:block space-y-1">
          {menuSectionsAccountSettings.map(({ title, rute }) => (
            <AccountSettingSection
              key={title}
              title={title}
              rute={rute}
              selected={pathname === rute}
            />
          ))}
        </section>
        <div className="flex h-full p-4 rounded-2xl flex-row w-full bg-white overflow-y-auto overflow-x-auto scrollbar-none scrollbar border border-gray-200">
          {children}
        </div>
      </div>
      {/*<div className="space-y-1">  
        {[...Array(12)].map((_, i) => (    
        <div key={i}      
            className="h-[200px] w-[200px] bg-[#34367f] text-primary-foreground"    
        >
              {i}    
        </div>
                ))}
        </div>
          */}
      <Button>Prueba Desborde</Button>
    </div>
  );
}
