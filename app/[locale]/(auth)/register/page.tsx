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
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function Register({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("register");

  const router = useRouter();
  const pb = createBrowserClient();

  const registerSchema = z
    .object({
      name: z.string().min(2, { message: t("nameRequired") }),
      email: z
        .string()
        .min(1, { message: t("emailRequired") })
        .email({ message: t("invalidEmail") }),
      image: z.string().optional(),
      password: z
        .string()
        .min(8, { message: t("passwordTooShort") })
        .regex(/\d/, { message: t("passwordNeedsDigit") })
        .regex(/[a-z]/, { message: t("passwordNeedsLowercase") })
        .regex(/[A-Z]/, { message: t("passwordNeedsUppercase") })
        .regex(/[!@#$%^&*(),.?":{}|<>]/, {
          message: t("passwordNeedsSpecialChar"),
        }),
      passwordConfirm: z.string({
        required_error: t("confirmPasswordRequired"),
      }),
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: t("passwordMismatch"),
      path: ["passwordConfirm"],
    });

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const handleRegister = async (values: z.infer<typeof registerSchema>) => {
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
      passwordConfirm: values.passwordConfirm,
    };

    const authData = await pb.collection("users").create(data);

    if (authData) {
      router.push("/dashboard");
    } else {
      toast("Failed to log in");
    }
  };

  const registerWithOauth = async () => {
    const authData = await pb
      .collection("users")
      .authWithOAuth2({ provider: "google" });
    const meta = authData.meta;

    if (meta?.isNew) {
      const formData = new FormData();

      const response = await fetch(meta?.avatarUrl);

      if (response.ok) {
        const file = await response.blob();
        formData.append("avatar", file);
      }

      formData.append("name", meta?.name);

      await pb.collection("users").update(authData.record.id, formData);
      if (authData) {
        router.push("/dashboard");
      } else {
        toast("Failed to log in");
      }
    }
  };

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
            onSubmit={form.handleSubmit(handleRegister)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("nameLabel")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("namePlaceholder")} {...field} />
                  </FormControl>
                  <FormDescription>{t("nameDescription")}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                  <FormLabel>{t("passwordLabel")}</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormDescription>{t("passwordDescription")}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("passwordConfirmLabel")}</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormDescription>
                    {t("passwordConfirmDescription")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              {t("signUpButton")}
            </Button>
          </form>
        </Form>
        <Button
          variant="outline"
          className="w-full"
          onClick={registerWithOauth}
        >
          {t("signUpWithGoogle")}
        </Button>
        <div className="mt-2 text-center text-sm">
          <Link href={`/login`} className="underline">
            {t("loginLink")}
          </Link>
        </div>
      </div>
    </div>
  );
}
