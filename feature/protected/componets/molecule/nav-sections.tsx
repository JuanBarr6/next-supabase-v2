import React from "react";
import { Label } from "@/components/ui/label";

import Link from "next/link";

interface NavSectionsProps {
  Icon: React.ElementType;
  title: string;
}

export default async function NavSection({ Icon, title }: NavSectionsProps) {
  return (
    <Link
      className="flex items-center gap-2 px-4 py-1 rounded-sm  w-full hover:bg-primary-foreground/20 transition-colors duration-200 ease-in-out cursor-pointer"
      href={`protected/account-settings`}
    >
      <Icon className="text-primary-foreground" />
      <Label className="text-primary-foreground">{title}</Label>
    </Link>
  );
}
