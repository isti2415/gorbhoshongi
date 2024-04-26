"use client";
import clsx from "clsx";
import { ChangeEvent, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "next-intl";
import { locales } from "@/config";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export function LanguageToggle() {
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={"icon"} disabled={isPending}>
          <Globe />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((cur) => (
          <DropdownMenuItem
            key={cur}
            onClick={() => onSelectChange({ target: { value: cur } } as any)}
          >
            {cur === "en" ? "English" : "বাংলা"}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
