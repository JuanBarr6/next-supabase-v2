import { Label } from "@radix-ui/react-label";
import InternalNavBar from "@/feature/protected/sub-features/account-settings/utils/constants/internal-nav-bar";

export default function AccountSettings({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex p-8 bg-gray-100 h-screen w-full flex-col gap-5">
      <Label className="text-2xl font-bold">Account Settings</Label>
      <div className="flex h-full p-4 w-full rounded-2xl shadow-md bg-white flex-row">
        <InternalNavBar />

        <div className="flex-1 overflow-y-auto scrollbar-none pl-4">
          {children}
        </div>
      </div>
    </div>
  );
}
