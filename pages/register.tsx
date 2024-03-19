import React from "react";
import { RegisterCard } from "@/components/register-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

export default function Register() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      <div className="fixed top-4 right-4">
        <Link href="/login">
          <Button>
            <UserPlus className="mr-2" />
            Login to your account
          </Button>
        </Link>
      </div>
      <div className="fixed top-4 left-4 text-2xl mt-1 lg:mt-0 lg:text-4xl font-bold text-foreground">GorbhoShongi</div>
      <div className="bg-background hidden lg:flex flex-col items-center justify-center gap-24">
        
      </div>
      <div className="bg-secondary flex items-center justify-center container">
        <RegisterCard />
      </div>
    </div>
  );
}
