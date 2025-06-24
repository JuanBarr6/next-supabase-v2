import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

import ProtectedHome from "@/feature/protected/componets/page/protected-home";

export default function ProtectedPage() {
  // const supabase = await createClient();
  //
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  //
  // if (!user) {
  //   return redirect("/sign-in");
  // }

  return (
    <div className=" flex-1 flex-col h-full space-y-4 w-full overflow-y-auto overflow-x-hidden">
      <ProtectedHome />
      {/*{[...Array(12)].map((_, i) => (*/}
      {/*  <div key={i} className="h-[200px] w-[200px] bg-[#34367f]">*/}
      {/*    123*/}
      {/*  </div>*/}
      {/*))}*/}
    </div>
  );
}
