import { Label } from "@/components/ui/label";
import AccountSettingSection from "@/feature/protected/componets/sub-features/account-seetings/components/nav-account-setting-section";
import { menuSectionsAccountSettings } from "@/feature/protected/componets/sub-features/account-seetings/utils/constants/nav-account-settings";

export default function AccountSettings({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-background h-full w-full flex-col gap-5">
      <Label className="text-2xl">Account Settings</Label>
      <div className="flex flex-row gap-10">
        <div className="space-y-1 w-[120px]">
          <section className="mt-4 flex flex-col gap-4 w-full">
            {menuSectionsAccountSettings.map(({ title }) => (
              <AccountSettingSection title={title} />
            ))}
          </section>
        </div>
        <div className="mt-3 flex h-full p-4 rounded-2xl flex-row w-full bg-primary overflow-y-auto scrollbar-none scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}
