import Address from "@/feature/protected/componets/molecule/address";
import ProfileUser from "@/feature/protected/componets/molecule/profile-user";
import PersonalInfo from "@/feature/protected/componets/molecule/personal-information";

export default function MyProfile() {
  return (
    <div className="font-bold">
      <div className="ml-[100px]">My profile</div>
      <ProfileUser />
      <PersonalInfo />
      <Address />
    </div>
  );
}
