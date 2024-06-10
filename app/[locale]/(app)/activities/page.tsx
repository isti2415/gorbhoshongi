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

function Activities() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Positive Psychology-based Exercises</CardTitle>
          <CardDescription>
            Access positive psychology-based exercises to enhance your mental
            well-being and promote a positive mindset.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link
            href={"/activities/positive-psychology-based-exercises"}
            className="w-full"
          >
            <Button className="w-full">Explore Exercises</Button>
          </Link>
        </CardFooter>
      </Card>
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Relaxation Exercises</CardTitle>
          <CardDescription>
            Access relaxation exercises to reduce stress and promote relaxation,
            fostering a sense of calm and tranquility.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href={"/activities/relaxation-exercises"} className="w-full">
            <Button className="w-full">Discover Exercises</Button>
          </Link>
        </CardFooter>
      </Card>
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Mindfulness-based Meditation</CardTitle>
          <CardDescription>
            Engage in mindfulness-based meditation practices to cultivate
            present moment awareness and enhance overall well-being.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href={"/activities/mindfulness-meditation"} className="w-full">
            <Button className="w-full">Start Meditation</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Activities;
