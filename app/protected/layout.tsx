import PersonalInfo from "@/feature/protected/componets/molecule/personal-information";
import LateralNavBar from "@/feature/protected/componets/organism/lateral-nav-bar";
import Address from "@/feature/protected/componets/molecule/address";
import ProfileUser from "@/feature/protected/componets/molecule/profile-user";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row w-full h-full">
        <LateralNavBar />
        {children}
      </div>
    </div>
  );
}
