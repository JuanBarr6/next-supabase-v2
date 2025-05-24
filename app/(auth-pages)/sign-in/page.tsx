"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SubmitButton } from "@/components/submit-button";
import { FormProvider } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import LabelField from "@/components/form/label-field";

const loginSchema = z.object({
  email: z.string().email("Ingresa un email válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const DEFAULT_EMAIL = "user@example.com";
const DEFAULT_PASSWORD = "123456";

export default function Login() {
  const router = useRouter();
  const [serverMessage, setServerMessage] = useState<{
    type?: string;
    text?: string;
  }>({});

  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: DEFAULT_EMAIL,
      password: DEFAULT_PASSWORD,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: LoginFormData) => {
    const supabase = createClientComponentClient();

    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      setServerMessage({ type: "error", text: error.message });
    } else {
      setServerMessage({ type: "success", text: "Inicio de sesión exitoso" });
      router.push("/protected");
    }
  };

  return (
    <FormProvider {...{ ...methods }}>
      <form
        className="flex-1 flex flex-col min-w-64"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h1 className="text-2xl font-medium">Sign in</h1>
        <p className="text-sm text-foreground">
          Don't have an account?{" "}
          <Link
            className="text-foreground font-medium underline"
            href="/sign-up"
          >
            Sign up
          </Link>
        </p>

        <div className="flex flex-col gap-2 mt-8">
          <LabelField
            control={control}
            controlName="email"
            title="Email"
            placeholder="you@example.com"
          />

          <LabelField
            control={control}
            controlName="password"
            title="Password"
            placeholder="••••••"
            type="password"
          />

          {serverMessage.text && (
            <p
              className={`text-sm ${serverMessage.type === "error" ? "text-red-500" : "text-green-500"}`}
            >
              {serverMessage.text}
            </p>
          )}

          <SubmitButton
            type="submit"
            pendingText="Signing In..."
            disabled={isSubmitting}
          >
            Sign in
          </SubmitButton>
        </div>
      </form>
    </FormProvider>
  );
}
