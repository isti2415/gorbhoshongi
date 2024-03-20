import React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Nav = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="fixed top-0 flex flex-col items-center justify-center bg-background">
      <div className="flex items-center justify-between p-4 h-16 w-screen">
        <div className="flex items-center gap-4">
          <Drawer direction="left">
            <DrawerTrigger asChild>
              {!isDesktop && (
                <Button variant="outline" size="icon">
                  <Menu />
                </Button>
              )}
            </DrawerTrigger>
            <DrawerContent className="h-screen w-96"></DrawerContent>
          </Drawer>
          <span className="font-bold text-xl">GorbhoKotha</span>
        </div>
        {isDesktop && (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <img src="/bn-BD.png" className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/meditation" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Meditation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}
        <Popover>
          <PopoverTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="/faiza.jpg" />
              <AvatarFallback>FO</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>Faiza Omar</PopoverContent>
        </Popover>
      </div>
      <Separator className="w-full" />
    </div>
  );
};

export default Nav;
