"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Bot,
  HeartPulse,
  Newspaper,
  PersonStanding,
  TestTubeDiagonal
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";
import UserButton from "./UserButton";

function Nav({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations("navigation");

  const links = [
    {
      href: "/dashboard",
      label: t("dashboard"),
      icon: <Newspaper className="h-6 w-6" />,
    },
    {
      href: "/screening",
      label: t("screening"),
      icon: <TestTubeDiagonal className="h-6 w-6" />,
    },
    {
      href: "/activities",
      label: t("activities"),
      icon: <PersonStanding className="h-6 w-6" />,
    },
    {
      href: "/healthcare",
      label: t("healthcare"),
      icon: <HeartPulse className="h-6 w-6" />,
    },
    {
      href: "/chatbot",
      label: t('chatbot'),
      icon: <Bot className="h-6 w-6" />
    }
  ];

  let pathname = usePathname();
  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <header className="container bg-background fixed top-0 h-16 grid grid-cols-2 lg:grid-cols-3 items-center justify-between z-50 w-screen">
      <Logo
        className="text-xl justify-self-start"
        withText
        horizontal
        logoWidth={32}
        logoHeight={32}
        params={{ locale }}
      />
      <NavigationMenu className="hidden items-center justify-self-center gap-6 text-sm font-medium lg:flex cursor-pointer">
        <NavigationMenuList>
          {links.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <Link href={href} legacyBehavior>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  active={isActive(href)}
                >
                  {label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="justify-self-end">
        <UserButton params={{ locale }} />
      </div>
      <div className="bg-background fixed bottom-0 left-0 z-10 flex w-full items-center justify-around py-3 shadow-t lg:hidden border-t">
        {links.map(({ href, label, icon }) => (
          <Link
            key={href}
            className={`flex flex-col items-center gap-1 text-xs font-medium ${isActive(href) ? "text-accent" : ""
              }`}
            href={href}
          >
            {icon}
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Nav;
