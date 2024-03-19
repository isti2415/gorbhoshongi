"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Accessibility, MoonIcon, SunIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { useRouter } from "next/router";
import Link from "next/link";
import contents from "@/content.json";

export function AccessibilityToggle() {
  const { setTheme, theme } = useTheme();
  const { locale, locales, asPath } = useRouter();
  const [content, setContent] = React.useState<any | null>(null);

  React.useEffect(() => {
    const filteredContent = contents.accessibility.find(
      (p: any) => p.locale === locale
    );
    if (filteredContent) {
      setContent(filteredContent);
    }
  }, [locale]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"  size="icon" className="fixed bottom-4 left-4">
          <Accessibility />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-auto">
        <DialogHeader>{content?.title}</DialogHeader>
        <DialogDescription className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-8">
            <span className="text-md font-bold text-nowrap">
              {content?.theme}:
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center justify-between gap-2"
                >
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                  <span>
                    {theme === "light"
                      ? content?.light
                      : theme === "dark"
                      ? content?.dark
                      : content?.system}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-full">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  {content?.light}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  {content?.dark}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  {content?.system}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex justify-between items-center gap-8">
            <span className="text-md font-bold">{content?.language}:</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center justify-between gap-2"
                >
                  <img src={`/${locale}.png`} className="h-4 w-4" />
                  <span className="sr-only">Toggle Language</span>
                  <span>{locale}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-full">
                {locales?.map((l, i) => {
                  return (
                    <Link href={asPath} locale={l} key={i}>
                      <DropdownMenuItem className="cursor-pointer flex items-center justify-between">
                        <img src={`/${l}.png`} className="h-4 w-4" />
                        <span>{l}</span>
                      </DropdownMenuItem>
                    </Link>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
