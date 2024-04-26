import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("index");

  return (
    <div className="bg-background text-foreground text-xl">
      <span className="text-primary-foreground">{t('gorbhoshongi')}</span>
      <div className="flex items-center justify-center gap-4">
        <Link href={"/login"}>
          <Button>{t('loginButton')}</Button>
        </Link>
        <Link href={"/register"}>
          <Button>{t('signUpButton')}</Button>
        </Link>
      </div>
    </div>
  );
}
