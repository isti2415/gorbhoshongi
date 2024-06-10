import { LanguageToggle } from "@/components/locale-switcher";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/mode-toggle";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import React from "react";

function AuthLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <div className="w-full lg:grid min-h-screen lg:grid-cols-2">
      {children}
      <div className="hidden bg-muted lg:flex items-center justify-center">
        <Logo logoHeight={240} logoWidth={240} withText params={{ locale }} className="text-6xl gap-8"/>
      </div>
      <div className="flex gap-2 fixed bottom-5 left-5">
        <ModeToggle />
        <LanguageToggle />
      </div>
    </div>
  );
}

export default AuthLayout;
