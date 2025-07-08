import React from "react";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface AccountSettingSectionProps {
  title: string;
  rute: string;
  selected?: boolean;
}

export default function AccountSettingSection({
  title,
  rute,
  selected,
}: AccountSettingSectionProps) {
  return (
    <Link href={rute}>
      <Button
        className={`flex justify-start gap-2 px-4 py-1 rounded-sm w-full transition-colors duration-200 ease-in-out cursor-pointer
        ${selected ? "bg-blue-500/20" : "bg-transparent"}
        hover:bg-blue-500/30`}
      >
        <Label className={`${selected ? "text-blue-700" : "text-black"} `}>
          {title}
        </Label>
      </Button>
    </Link>
  );
}
