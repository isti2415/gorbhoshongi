import React from "react";
import { LoginCard } from "@/components/login-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

export default function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="grid lg:grid-cols-2 h-screen">
      <div className="fixed top-4 right-4">
        <Link href="/register">
          <Button>
            <UserPlus className="mr-2" />
            Create an account
          </Button>
        </Link>
      </div>
      <div className="fixed top-4 left-4 text-2xl mt-1 lg:mt-0 lg:text-4xl font-bold text-foreground">
        GorbhoShongi
      </div>
      <div className="bg-background hidden lg:flex flex-col items-center justify-center gap-24"></div>
      <div className="bg-secondary flex items-center justify-center container">
        <LoginCard />
      </div>
    </div>
  );
}
