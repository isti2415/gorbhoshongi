"use client"

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import AvatarComponent from "./AvatarComponent";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogOut, PersonStanding, UserCircle } from "lucide-react";
import { createBrowserClient } from "@/lib/pocketbase";
import { RecordModel } from "pocketbase";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

function UserButton({ params: { locale } }: { params: { locale: string } }) {

    const t = useTranslations("navigation");

  const router = useRouter();
  const pb = createBrowserClient();

  const user = pb.authStore.model as RecordModel;
  const avatarUrl = pb.files.getUrl(user, user?.avatar);

  const handleLogout = () => {
    pb.authStore.clear();
    router.push("/login");
  };

  return (
    <Popover>
      <PopoverTrigger>
        <AvatarComponent src={avatarUrl} name={user?.name} />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col items-start justify-center gap-4">
        <div className="flex items-center justify-start gap-2">
          <AvatarComponent src={avatarUrl} name={user?.name} />
          <div className="flex flex-col items-start justify-center">
            <span className="text-sm">{user?.name}</span>
            <span className="text-sm">{user?.email}</span>
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
          <Link href={"/personalization"}>
            <Button
              variant={"ghost"}
              className="w-full justify-start flex items-center gap-2"
            >
              <PersonStanding />
              Personalization
            </Button>
          </Link>
        </div>
        <Separator />
        <Button
          variant={"ghost"}
          className="w-full justify-start flex items-center gap-2 hover:bg-red-900"
          onClick={handleLogout}
        >
          <LogOut />
          {t("logout")}
        </Button>
      </PopoverContent>
    </Popover>
  );
}

export default UserButton;
