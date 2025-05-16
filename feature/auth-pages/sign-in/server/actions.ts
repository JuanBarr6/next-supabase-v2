"use server";

import { createClient } from "@/utils/supabase/server";
import { encodedRedirect } from "@/utils/utils";
import { redirect } from "next/navigation";
import { LoginRequest } from "@/feature/auth-pages/sign-in/data/dto";

export const signInAction = async (forms: LoginRequest) => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: forms.email,
    password: forms.password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/protected");
};
