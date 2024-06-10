"use client";

import AvatarComponent from "@/components/AvatarComponent";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { createBrowserClient } from "@/lib/pocketbase";
import { Loader2 } from "lucide-react";
import { RecordModel } from "pocketbase";
import React, { useEffect, useState } from "react";

function ProfileClient() {
  const [user, setUser] = useState<RecordModel | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const pb = createBrowserClient();
    const storedUser = pb.authStore.model as RecordModel;
    setUser(storedUser);

    if (storedUser?.avatar) {
      const avatarUrl = pb.files.getUrl(storedUser, storedUser.avatar);
      setAvatarUrl(avatarUrl);
    }
  }, []);

  if (!user || !avatarUrl) {
    return <Loader2 className="animate-spin" />;
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl">Profile</h1>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex items-center justify-center">
            <AvatarComponent
              src={avatarUrl}
              name={user.name}
              className="w-48 h-48"
            />
            <Input
              type="file"
              className="absolute opacity-0 cursor-pointer z-10 w-48 h-48 rounded-full"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click to change profile picture</p>
        </TooltipContent>
      </Tooltip>
      <div className="flex items-center gap-2 w-full">
        <Label>Name:</Label>
        <Input className="w-full" value={user?.name} disabled />
      </div>
      <div className="flex items-center gap-2 w-full mx-8">
        <Label>Email:</Label>
        <Input className="w-full" value={user?.email} disabled />
      </div>
      <div className="w-full align-left">Change Password</div>
      <Separator />
      <div className="flex flex-col items-start gap-4 w-full">
        <Label>Password:</Label>
        <Input className="w-full" />
        <Label>Confirm Password:</Label>
        <Input className="w-full" />
      </div>
      <Button className="w-full">Save Changes</Button>
    </div>
  );
}

export default ProfileClient;
