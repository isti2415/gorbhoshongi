"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { locales } from "@/config";
import { Moon, Sun } from "lucide-react";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

function Personalization() {
  const { setTheme, theme } = useTheme();

  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      // Update the NEXT_LOCALE cookie
      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=3153600; SameSite=Lax`;
      router.refresh();
    });
  }

  return (
    <div className="w-screen-sm flex flex-col items-center gap-4">
      <h1 className="text-2xl">Personalization</h1>
      <div className="flex items-center justify-between gap-4 w-full">
        <div>Theme:</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center justify-between gap-2"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span>
                {theme == "light"
                  ? "Light"
                  : theme == "dark"
                  ? "Dark"
                  : "System"}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator className="w-full" />
      <div className="flex items-center justify-between gap-4 w-full">
        <div>Language:</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" disabled={isPending}>
              <span>{locale === "en" ? "English" : "বাংলা"}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {locales.map((cur) => (
              <DropdownMenuItem
                key={cur}
                onClick={() =>
                  onSelectChange({ target: { value: cur } } as any)
                }
              >
                {cur === "en" ? "English" : "বাংলা"}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Personalization;
