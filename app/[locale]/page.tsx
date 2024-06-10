import { LanguageToggle } from "@/components/locale-switcher";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/UserButton";
import { createBrowserClient } from "@/lib/pocketbase";
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

  const pb = createBrowserClient();

  return (
    <div className="bg-background text-foreground text-xl">
      <span className="text-primary-foreground">{t("gorbhoshongi")}</span>
      {pb.authStore.isValid ? (
        <div className="flex items-center justify-center gap-4">
          <Link href={"/login"}>
            <Button>{t("loginButton")}</Button>
          </Link>
          <Link href={"/register"}>
            <Button>{t("signUpButton")}</Button>
          </Link>
        </div>
      ) : (
        <UserButton params={{ locale }} />
      )}
      <div className="flex gap-2 fixed bottom-5 left-5">
        <ModeToggle />
        <LanguageToggle />
      </div>
    </div>
  );
}
