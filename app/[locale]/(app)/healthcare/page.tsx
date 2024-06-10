import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

function Healthcare() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Comprehensive Healthcare Support</CardTitle>
          <CardDescription>
            Access personalized mental health services designed for expectant
            and new mothers. Our support system prioritizes your emotional
            well-being, offering resources to navigate pregnancy with
            resilience.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href={"/healthcare/healthcare-support"} className="w-full">
            <Button className="w-full">Explore Healthcare</Button>
          </Link>
        </CardFooter>
      </Card>
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Empowering Psycho-Education</CardTitle>
          <CardDescription>
            Access empowering psycho-educational resources tailored to the
            unique emotional and psychological needs of expectant and new
            mothers, fostering emotional well-being and resilience.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link
            href={"/healthcare/psycho-educational-texts"}
            className="w-full"
          >
            <Button className="w-full">Discover Resources</Button>
          </Link>
        </CardFooter>
      </Card>
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Secure Medical Data Sharing</CardTitle>
          <CardDescription>
            Ensure seamless and secure sharing of your medical data with trusted
            healthcare professionals, facilitating personalized and effective
            care throughout your pregnancy.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href={"/healthcare/medical-data-sharing"} className="w-full">
            <Button className="w-full">Share Data Securely</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Healthcare;
