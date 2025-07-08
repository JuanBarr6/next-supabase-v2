import { UserProfile } from "@/feature/protected/componets/sub-features/account-seetings/sub-features/my-profile/components/user-profile";
import { PersonalInfo } from "@/feature/protected/componets/sub-features/account-seetings/sub-features/my-profile/components/personal-info";
import { AddressInfo } from "@/feature/protected/componets/sub-features/account-seetings/sub-features/my-profile/components/address-info";
export default function MyProfile() {
  return (
    <div className="space-y-1 bg-white w-full">
      <h1 className="font-bold">My Profile</h1>
      <div className="h-full w-full flex flex-col bg-white text-black  p-4">
        <UserProfile />
        <PersonalInfo />
        <AddressInfo />
      </div>
    </div>
  );
}
