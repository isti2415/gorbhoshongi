"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import { createBrowserClient } from "@/lib/pocketbase";
import { RecordModel } from "pocketbase";
import { toast } from "sonner";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ContinuousMoodTracking() {
  const [open, setOpen] = React.useState(false);
  const [mood, setMood] = React.useState("");
  const [user, setUser] = React.useState<RecordModel | null>(null);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const pb = createBrowserClient();

  React.useEffect(() => {
    const storedUser = pb.authStore.model as RecordModel;
    setUser(storedUser);
  }, [pb]);

  React.useEffect(() => {
    console.log(user?.id);
  }, [mood, user?.id]);

  const handleSubmit = async () => {
    try {
      const data = {
        value: mood,
        userId: user?.id,
      };

      const record = await pb.collection("mood").create(data);
      if (record) {
        toast("Mood data successfully saved");
      }
    } catch (error) {
      toast("Error submitting mood tracking data");
    }
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size={"sm"}>Record current mood</Button>
        </DialogTrigger>
        <DialogContent className="flex flex-col gap-8">
          <DialogHeader>
            <DialogTitle>Record current mood</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center w-full gap-8">
            <ToggleGroup
              type="single"
              className="flex items-center justify-between gap-8"
              onValueChange={(value) => setMood(value)}
            >
              <ToggleGroupItem value="Very Sad">
                <Image
                  src="/mood-tracking/1.png"
                  width={"48"}
                  height={"48"}
                  alt="score 0"
                />
              </ToggleGroupItem>
              <ToggleGroupItem value="Sad">
                <Image
                  src="/mood-tracking/2.png"
                  width={"48"}
                  height={"48"}
                  alt="score 1"
                />
              </ToggleGroupItem>
              <ToggleGroupItem value="Neutral">
                <Image
                  src="/mood-tracking/3.png"
                  width={"48"}
                  height={"48"}
                  alt="score 2"
                />
              </ToggleGroupItem>
              <ToggleGroupItem value="Happy">
                <Image
                  src="/mood-tracking/4.png"
                  width={"48"}
                  height={"48"}
                  alt="score 3"
                />
              </ToggleGroupItem>
              <ToggleGroupItem value="Very Happy">
                <Image
                  src="/mood-tracking/5.png"
                  width={"48"}
                  height={"48"}
                  alt="score 4"
                />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <DialogFooter>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>Record current mood</Button>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col gap-8">
        <DrawerHeader className="text-left">
          <DrawerTitle>Record current mood</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you are done.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col items-center w-full gap-8 px-4">
          <ToggleGroup
            type="single"
            className="flex items-center justify-between gap-8"
            onValueChange={(value) => setMood(value)}
          >
            <ToggleGroupItem value="Very Sad">
              <Image
                src="/mood-tracking/1.png"
                width={"48"}
                height={"48"}
                alt="score 0"
              />
            </ToggleGroupItem>
            <ToggleGroupItem value="Sad">
              <Image
                src="/mood-tracking/2.png"
                width={"48"}
                height={"48"}
                alt="score 1"
              />
            </ToggleGroupItem>
            <ToggleGroupItem value="Neutral">
              <Image
                src="/mood-tracking/3.png"
                width={"48"}
                height={"48"}
                alt="score 2"
              />
            </ToggleGroupItem>
            <ToggleGroupItem value="Happy">
              <Image
                src="/mood-tracking/4.png"
                width={"48"}
                height={"48"}
                alt="score 3"
              />
            </ToggleGroupItem>
            <ToggleGroupItem value="Very Happy">
              <Image
                src="/mood-tracking/5.png"
                width={"48"}
                height={"48"}
                alt="score 4"
              />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <DrawerFooter className="pt-2">
          <Button onClick={handleSubmit}>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
