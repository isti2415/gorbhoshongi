"use client";

import AvatarComponent from "@/components/Avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  HeartPulse,
  LogOut,
  LogOutIcon,
  Newspaper,
  PersonStanding,
  Settings,
  TestTubeDiagonal,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./locale-switcher";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const links = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: <Newspaper className="h-6 w-6" />,
  },
  {
    href: "/screening",
    label: "Screening",
    icon: <TestTubeDiagonal className="h-6 w-6" />,
  },
  {
    href: "/activities",
    label: "Activities",
    icon: <PersonStanding className="h-6 w-6" />,
  },
  {
    href: "/healtcare",
    label: "Healthcare",
    icon: <HeartPulse className="h-6 w-6" />,
  },
];

function Nav() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="container bg-background fixed top-0 border-b h-16 grid grid-cols-2 lg:grid-cols-3 items-center justify-between z-50 w-screen">
      <h1 className="text-bold">GorbhoShongi</h1>
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
        <Popover>
          <PopoverTrigger>
            <AvatarComponent />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col items-start justify-center gap-4">
            <div className="flex items-center justify-start gap-2">
              <AvatarComponent />
              <div className="flex flex-col items-start justify-center">
                <span className="text-lg">User</span>
                <span className="text-sm">user@user@gmail.com</span>
              </div>
            </div>
            <Separator />
            <div className="space-y-2 w-full">
              <Link href={"/profile"}>
                <Button
                  variant={"ghost"}
                  className="w-full justify-start flex items-center gap-2"
                >
                  <UserCircle />
                  Profile
                </Button>
              </Link>
              <Link href={"/settings"}>
                <Button
                  variant={"ghost"}
                  className="w-full justify-start flex items-center gap-2"
                >
                  <Settings />
                  Settings
                </Button>
              </Link>
            </div>
            <Separator />
            <Button
              variant={"ghost"}
              className="w-full justify-start flex items-center gap-2 hover:bg-red-900"
            >
              <LogOut />
              Logout
            </Button>
          </PopoverContent>
        </Popover>
      </div>
      <div className="fixed bottom-0 left-0 z-10 flex w-full items-center justify-around py-3 shadow-t lg:hidden border-t">
        {links.map(({ href, label, icon }) => (
          <Link
            key={href}
            className={`flex flex-col items-center gap-1 text-xs font-medium data-[active]: ${
              isActive(href) ? "text-accent" : ""
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