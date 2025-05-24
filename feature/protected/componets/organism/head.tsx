"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { User } from "@supabase/supabase-js";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";

export default function HeadNavBar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const supabase = createClientComponentClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();
  }, []);

  return (
    <div className="flex p-2 rounded-md gap-2 items-center">
      <Avatar>
        <AvatarImage
          src={`https://api.dicebear.com/6.x/initials/svg?seed=${user?.email}`}
          alt={user?.email || "User"}
        />
        <AvatarFallback>
          {user?.email?.[0]?.toUpperCase() || "U"}
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col text-primary-foreground">
        <div className="flex items-center">
          <Label>Sergio Otálvaro</Label>
          <ChevronDown size={18} />
        </div>
        <Label className="text-xs">{user?.email || "Invitado"}</Label>
      </div>
    </div>
  );
}
