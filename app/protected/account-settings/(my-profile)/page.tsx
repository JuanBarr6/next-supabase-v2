import TopNavBar from "@/feature/protected/componets/organism/top-nav-bar";
import Address from "@/feature/protected/sub-features/account-settings/sub-features/my-profile/components/address";
import ProfileUser from "@/feature/protected/sub-features/account-settings/sub-features/my-profile/components/profile-user";
import PersonalInfo from "@/feature/protected/sub-features/account-settings/sub-features/my-profile/components/personal-information";

export default function MyProfile() {
  return (
    <div className="flex flex-col bg-background text-foreground min-h-screen">
      <TopNavBar />

      <div className="flex-1 overflow-y-auto">
        <main className="flex flex-col space-y-4 p-4 md:p-10">
          <ProfileUser />
          <PersonalInfo />
          <Address />
        </main>
      </div>
    </div>
  );
}
