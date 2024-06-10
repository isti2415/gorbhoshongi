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
import React from "react";

function Screening() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Edinburgh Postpartum Depression Scale</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter>
          <Link
            href={"/screening/edinburgh-postpartum-depression-scale"}
            className="w-full"
          >
            <Button className="w-full">Take the test</Button>
          </Link>
        </CardFooter>
      </Card>
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Mood Tracking</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter>
          <Link href={"/screening/mood-tracking"} className="w-full">
            <Button className="w-full">Record your current mood</Button>
          </Link>
        </CardFooter>
      </Card>
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Partner Mental Health Tracking</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter>
          <Link
            href={"/screening/partner-mental-health-tracking"}
            className="w-full"
          >
            <Button className="w-full">Add partner</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Screening;
