"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createBrowserClient } from "@/lib/pocketbase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function Login({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("login");

  const router = useRouter();

  const pb = createBrowserClient();

  const loginSchema = z.object({
    email: z
      .string()
      .min(1, { message: t("emailRequired") })
      .email({ message: t("invalidEmail") }),
    password: z
      .string()
      .min(8, { message: t("passwordTooShort") })
      .regex(/\d/, { message: t("passwordNeedsDigit") })
      .regex(/[a-z]/, { message: t("passwordNeedsLowercase") })
      .regex(/[A-Z]/, { message: t("passwordNeedsUppercase") })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: t("passwordNeedsSpecialChar"),
      }),
  });

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    data,
    mutate: server_login,
    isPending: isPendingLogin,
  } = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const { email, password } = data;
      return pb.collection("users").authWithPassword(email, password);
    },
    onSuccess: () => {
      router.push("/dashboard");
    },
    onError: () => {
      toast(t("loginFailed"));
    },
  });

  const {
    data: OAuthData,
    mutate: server_loginWithOAuth,
    isPending: isPendingOAuthLogin,
  } = useMutation({
    mutationFn: async () => {
      return pb.collection("users").authWithOAuth2({ provider: "google" });
    },
    onSuccess: () => {
      router.push("/dashboard");
    },
    onError: () => {
      toast(t("loginFailed"));
    },
  });

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">{t("heading")}</h1>
          <p className="text-balance text-muted-foreground">
            {t("subheading")}
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => server_login(data))}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("emailLabel")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("emailPlaceholder")} {...field} />
                  </FormControl>
                  <FormDescription>{t("emailDescription")}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <div className="flex items-center justify-between w-full">
                      <span>{t("passwordLabel")}</span>
                      <Link
                        href={`/forgot-password`}
                        className="ml-auto inline-block text-sm underline"
                      >
                        {t("forgotPassword")}
                      </Link>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormDescription>{t("passwordDescription")}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              {t("loginButton")}
            </Button>
          </form>
        </Form>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => server_loginWithOAuth()}
        >
          {t("loginWithGoogle")}
        </Button>
        <div className="text-center text-sm">
          <Link href={`/register`} className="underline">
            <Button variant={"link"}>{t("signUpLink")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
