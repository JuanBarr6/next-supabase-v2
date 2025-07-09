import Address from "@/feature/protected/sub-features/account-settings/sub-features/my-profile/components/address";
import ProfileUser from "@/feature/protected/sub-features/account-settings/sub-features/my-profile/components/profile-user";
import PersonalInfo from "@/feature/protected/sub-features/account-settings/sub-features/my-profile/components/personal-information";

export default function MyProfile() {
  return (
    <div className="font-bold space-y-1">
      {[...Array(1)].map((_, i) => (
        <div key={i} className="text-black">
          My profile
          <ProfileUser />
          <PersonalInfo />
          <Address />
        </div>
      ))}
    </div>
  );
}
