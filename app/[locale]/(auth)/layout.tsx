import { LanguageToggle } from "@/components/locale-switcher";
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
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex gap-2 fixed bottom-5 left-5">
        <ModeToggle />
        <LanguageToggle />
      </div>
    </div>
  );
}

export default AuthLayout;
