import type { Metadata } from "next";
import {
  Noto_Sans as FontEnglish,
  Noto_Sans_Bengali as FontBengali,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageToggle } from "@/components/locale-switcher";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/config";

// Can be imported from a shared config

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const fontEnglish = FontEnglish({
  subsets: ["latin"],
  variable: "--font-english",
});

const fontBengali = FontBengali({
  subsets: ["bengali"],
  variable: "--font-bengali",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body
        className={cn(
          "min-h-screen antialiased",
          locale === "en"
            ? fontEnglish.className
            : locale === "bn"
            ? fontBengali.className
            : fontEnglish.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <div className="flex gap-2 fixed bottom-5 left-5">
            <ModeToggle />
            <LanguageToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}