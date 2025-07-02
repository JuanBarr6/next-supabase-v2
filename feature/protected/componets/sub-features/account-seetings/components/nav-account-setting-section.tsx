import React from "react";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface AccountSettingSectionProps {
  title: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function AccountSettingSection({
  title,
  selected,
  onClick,
}: AccountSettingSectionProps) {
  return (
    <Button
      onClick={onClick}
      className={`flex justify-start gap-2 px-4 py-1 rounded-sm w-full transition-colors duration-200 ease-in-out cursor-pointer 
        ${selected ? "bg-blue-500/20" : "bg-transparent"} 
        hover:bg-blue-500/30`}
    >
      <Label className={`${selected ? "text-blue-700" : "text-black"} `}>
        {title}
      </Label>
    </Button>
  );
}
