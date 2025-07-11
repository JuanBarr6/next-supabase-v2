import Address from "@/feature/protected/sub-features/account-settings/sub-features/my-profile/components/address";
import ProfileUser from "@/feature/protected/sub-features/account-settings/sub-features/my-profile/components/profile-user";
import PersonalInfo from "@/feature/protected/sub-features/account-settings/sub-features/my-profile/components/personal-information";

export default function TeamMember() {
  return (
    <div className="font-bold space-y-1 ml-10">
      <div className="text-black">
        Team Member
        <ProfileUser />
        <PersonalInfo />
        <Address />
      </div>
      <div className="text-black">
        Team member 2
        <ProfileUser />
        <PersonalInfo />
        <Address />
      </div>
    </div>
  );
}
