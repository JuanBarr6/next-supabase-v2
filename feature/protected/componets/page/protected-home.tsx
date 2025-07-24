"use client";

import { usePreventNavigation } from "@/feature/shared/hooks/navigation/use-provent-navigation";

export default function ProtectedHome() {
  usePreventNavigation(true);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="text-primary">Protected Home</div>
      <div className="text-primary">This is the protected home page.</div>
    </div>
  );
}
