"use client";
import { usePathname } from "next/navigation";
import { Label } from "@/components/ui/label";
import AccountSettingSection from "@/feature/protected/componets/sub-features/account-seetings/components/nav-account-setting-section";
import { menuSectionsAccountSettings } from "@/feature/protected/componets/sub-features/account-seetings/utils/constants/nav-account-settings";

export default function AccountSettings({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex bg-white h-full w-full flex-col gap-5">
      <Label className="text-2xl">Account Settings</Label>
      <div className="flex flex-row overflow-y-auto scrollbar-none gap-3">
        <section className="space-y-1 ">
          {menuSectionsAccountSettings.map(({ title, rute }) => (
            <AccountSettingSection
              key={title}
              title={title}
              rute={rute}
              selected={pathname === rute}
            />
          ))}
        </section>
        <div className="flex h-full p-4 rounded-2xl flex-row w-full bg-white overflow-y-auto scrollbar-none scrollbar border border-gray-200">
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
    </div>
  );
}
