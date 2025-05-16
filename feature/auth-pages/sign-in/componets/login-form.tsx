"use client";

import { useForm } from "react-hook-form";
import {
  loginFormSchema,
  LoginFormSchemaType,
} from "@/feature/auth-pages/sign-in/utils/login-validation";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import LabelField from "@/components/forms/label-field";
import { signInAction } from "@/feature/auth-pages/sign-in/server/actions";

export function LoginForm() {
  const form = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: any) => {
    await signInAction(data);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <LabelField controlName="email" title="email" />
          <LabelField controlName="password" title="password" />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
