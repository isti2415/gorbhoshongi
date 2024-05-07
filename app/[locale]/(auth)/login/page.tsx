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
import { pb } from "@/lib/pocketbase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function Login({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("login");

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

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    const authData = await pb
      .collection("users")
      .authWithPassword(values.email, values.password);

    if (authData) {
      redirect("/dashboard");
    } else {
      toast("Log in failed");
    }
  }

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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                        href={`/${locale}/forgot-password`}
                        className="ml-auto inline-block text-sm underline"
                      >
                        {t("forgotPassword")}
                      </Link>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>{t("passwordDescription")}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              {t("loginButton")}
            </Button>
            <Button variant="outline" className="w-full">
              {t("loginWithGoogle")}
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          <Link href={`/${locale}/register`} className="underline">
            {t("signUpLink")}
          </Link>
        </div>
      </div>
    </div>
  );
}
