import { Label } from "@radix-ui/react-label";
import InternalNavBar from "@/feature/protected/sub-features/account-settings/sub-features/utils/constants/internal-nav-bar";

export default function AccountSettings({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 p-8 bg-gray-100 h-screen w-full overflow-y-auto min-h-0">
      <Label className="text-2xl font-bold">Account Settings</Label>

      <div className="flex flex-1 rounded-2xl shadow-md bg-white overflow-y-auto">
        <div className="flex scrollbar-none p-4 bg-white flex-row flex-shrink-0">
          <InternalNavBar />
        </div>

        <div className="flex-1 pl-4 overflow-y-auto scrollbar-none">
          {children}
        </div>
      </div>
    </div>
  );
}
