import { Label } from "@/components/ui/label";

export default function AccountSettings({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-background h-full w-full flex-col gap-5">
      <Label className="text-2xl">Account Settings</Label>
      <div className="flex h-full p-4 rounded-2xl flex-row w-full bg-primary overflow-y-auto scrollbar-none scrollbar">
        {children}
      </div>
    </div>
  );
}
