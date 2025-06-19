import { Label } from "@radix-ui/react-label";

export default function AccountSettings({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex p-8 bg-gray-100 h-[720px] w-full flex-col gap-5">
      <Label className="text-2xl">Account Settings</Label>
      <div className="flex h-full p-4 w-full rounded-2xl shadow-md bg-white">
        {children}
      </div>
    </div>
  );
}
