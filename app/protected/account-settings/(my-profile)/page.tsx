import { menuSectionsAccountSettings } from "@/feature/protected/utils/my-profile-constants/nav-section-my-profile";
import AccountSettingSection from "@/feature/protected/componets/molecule/account-setting-section";

export default function MyProfile() {
  return (
    // <div className="space-y-1">
    //   {[...Array(12)].map((_, i) => (
    //     <div
    //       key={i}
    //       className="h-[200px] w-[200px] bg-[#34367f] text-primary-foreground"
    //     >
    //       {i}
    //     </div>
    //   ))}
    // </div>
    <div className="space-y-1">
      <section className="mt-4 flex flex-col gap-4 w-full">
        {menuSectionsAccountSettings.map(({ title }) => (
          <AccountSettingSection key={title} title={title} />
        ))}
      </section>
    </div>
  );
}
