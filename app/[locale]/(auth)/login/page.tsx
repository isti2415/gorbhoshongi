import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Login({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("login");

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">{t('heading')}</h1>
          <p className="text-balance text-muted-foreground">
            {t('subheading')}
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">{t('emailLabel')}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t('emailPlaceholder')}
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">
                {t('passwordLabel')}
              </Label>
              <Link
                href={`/${locale}/forgot-password`}
                className="ml-auto inline-block text-sm underline"
              >
                {t('forgotPassword')}
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            {t('loginButton')}
          </Button>
          <Button variant="outline" className="w-full">
            {t('loginWithGoogle')}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          <Link href={`/${locale}/register`} className="underline">
            {t('signUpLink')}
          </Link>
        </div>
      </div>
    </div>
  );
}
