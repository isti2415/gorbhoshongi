"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ContinuousMoodTracking } from "./continuous-mood-tracking";
import { DailyMoodTracking } from "./daily-mood-tracking";
import { createBrowserClient } from "@/lib/pocketbase";
import { useCallback, useEffect, useMemo, useState } from "react";
import { RecordModel } from "pocketbase";
import { format } from "date-fns"
import { CircleHelp } from "lucide-react";

function MoodTrackingPage() {

  const pb = createBrowserClient()

  const user = pb.authStore.model as RecordModel;

  const [dailyMoods, setDailyMoods] = useState<RecordModel[]>([]);

  const memoizedUser = useMemo(() => user, [user]);

  const fetchDailyMoods = useCallback(async () => {
    try {
      const dailyMoodsData = await pb
        .collection("daily_mood")
        .getFullList({ filter: `userId = "${memoizedUser?.id}"` });
      setDailyMoods(dailyMoodsData);
    } catch (error) {
      console.error("Error fetching daily moods:", error);
    }
  }, [pb, memoizedUser?.id]);

  useEffect(() => {
    fetchDailyMoods();

    const unsubscribe = pb.collection("daily_mood").subscribe("*", (e) => {
      if (e.record.user === memoizedUser?.id) {
        switch (e.action) {
          case "create":
          case "update":
            setDailyMoods((prevDailyMoods) => [...prevDailyMoods, e.record]);
            break;
          case "delete":
            setDailyMoods((prevDailyMoods) =>
              prevDailyMoods.filter((mood) => mood?.id !== e.record?.id)
            );
            break;
          default:
            break;
        }
      }
    });

    return () => {
      pb.collection("daily_mood").unsubscribe("*");
    };
  }, [fetchDailyMoods, pb, memoizedUser?.id]);

  console.log(dailyMoods);

  const today = new Date().toISOString().split('T')[0]; // Get the current date in the format "YYYY-MM-DD"
  const todaysMood = dailyMoods.find(mood => {
    const moodDate = new Date(mood.updated).toISOString().split('T')[0];
    return moodDate === today ? mood : null; // Convert mood.date to "YYYY-MM-DD" format
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Mood of the Day</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          {
            todaysMood ?
              <Image
                src={`/mood-tracking/${todaysMood.value}.png`}
                width={"96"}
                height={"96"}
                alt="score 1"
              />
              :
              <CircleHelp />
          }

        </CardContent>
        <CardFooter className="flex items-center justify-between gap-8">
          <div>Date: {new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}</div>
          <DailyMoodTracking update={true} />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Last Updated Mood</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Image
            src="/mood-tracking/5.png"
            width={"96"}
            height={"96"}
            alt="score 1"
          />
        </CardContent>
        <CardFooter className="flex items-center justify-between gap-8">
          <div>Last Updated: {new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          })}</div>
          <ContinuousMoodTracking />
        </CardFooter>
      </Card>
    </div>
  );
}

export default MoodTrackingPage;
