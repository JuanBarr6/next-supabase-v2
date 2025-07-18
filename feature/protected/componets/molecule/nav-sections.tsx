import React from "react";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface NavSectionsProps {
  Icon: React.ElementType;
  title: string;
}

export default function NavSection({ Icon, title }: NavSectionsProps) {
  return (
    <Link
      className="flex items-center gap-2 px-3 py-1 rounded-sm w-full hover:bg-primary-foreground/20 transition-colors duration-200 ease-in-out cursor-pointer
                 lg:px-4 lg:py-1"
      href={`protected/account-settings`}
    >
      <Icon className="text-primary-foreground text-sm lg:text-base" />
      <Label className="text-primary-foreground text-sm lg:text-base">
        {title}
      </Label>
    </Link>
  );
}
