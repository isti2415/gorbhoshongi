"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa6";
import Link from "next/link";

export const RegisterCard = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-card">
      <h2 className="font-bold text-xl text-card-foreground">
        Welcome to GorbhoShongi
      </h2>
      <p className="text-card-foreground text-sm max-w-sm mt-2">
        Create a new GorbhoShongi account.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex gap-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirmpassword">Confirm password</Label>
          <Input
            id="confirmpassword"
            placeholder="••••••••"
            type="confirmpassword"
          />
        </LabelInputContainer>

        <Link href="/dashboard">
        <Button
          className="bg-gradient-to-br relative group/btn w-full rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </Button>
        </Link>

        <Separator className="w-full my-4" />

        <span>Or Continue with</span>

        <div className="flex gap-2 mt-4">
          <Button
            className=" relative group/btn flex gap-2 items-center justify-start px-4 w-full rounded-md h-10 font-medium shadow-input dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
            variant={"outline"}
          >
            <FaApple className="mr-2 h-4 w-4" />
            Apple
            <BottomGradient />
          </Button>
          <Button
            className=" relative group/btn flex gap-2 items-center justify-start px-4 w-full rounded-md h-10 font-medium shadow-input dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
            variant={"outline"}
          >
            <FaGoogle className="mr-2 h-4 w-4" />
            Google
            <BottomGradient />
          </Button>
          <Button
            className=" relative group/btn flex gap-2 items-center justify-start px-4 w-full rounded-md h-10 font-medium shadow-input dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
            variant={"outline"}
          >
            <FaFacebook className="mr-2 h-4 w-4" />
            Facebook
            <BottomGradient />
          </Button>
        </div>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-purple-800 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      {children}
    </div>
  );
};
