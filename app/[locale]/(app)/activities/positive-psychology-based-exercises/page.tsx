import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function PositivePsychologyBasedExercises() {
  const contents = [
    {
      title:
        "Positive Psychology Exercises: Self Compassion Letter & Your Daily Holiday",
      description:
        "The Self-Compassion Pause can be used as a starting point to help users create a more self-compassionate attitude. This technique works best as a homework exercise in day-to-day encounters when users are aware that they are experiencing some form of suffering, like stress or discomfort.",
      video: {
        src: "https://www.youtube.com/embed/Lfth1bJKMmA",
        title:
          "Positive Psychology Exercises: Self Compassion Letter & Your Daily Holiday",
      },
    },
    {
      title:
        "Bring Your Awareness to the Present, Positive Psychology Exercise",
      description: "This exercise guides individuals in bringing their attention to the present moment, a fundamental practice in positive psychology. By fostering mindfulness and present-centered awareness, this exercise aims to enhance well-being and promote a deeper connection with the present experience.",
      video: {
        src: "https://www.youtube.com/embed/OU7BnLR81po",
        title:
          "Bring Your Awareness to the Present, Positive Psychology Exercise",
      },
    },
    {
      title: "The new era of positive psychology | Martin Seligman",
      description:
        "Martin Seligman talks about psychology in this 23 minute TED talk-- as a field of study and as it works one-on-one with each patient and each practitioner.",
      video: {
        src: "https://www.youtube.com/embed/9FBxfd7DL3E",
        title: "The new era of positive psychology | Martin Seligman",
      },
    },
    {
      title:
        "How to be Happier - An Exercise from Positive Psychology and the book The Power of Moments",
      description:
        "Diving into the wonderful world of positive psychology and discussing a powerful practice that’s a simple but transformative exercise that can bring a lot of joy and connection into your life.",
      video: {
        src: "https://www.youtube.com/embed/YwBb-jaVSuw",
        title:
          "How to be Happier - An Exercise from Positive Psychology and the book The Power of Moments",
      },
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {contents.map((content, index) => (
        <Card className="flex flex-col justify-between" key={index}>
          <CardHeader>
            <CardTitle>{content.title}</CardTitle>
            <CardDescription>{content.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src={content.video.src}
                title={content.video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full rounded-md"
              ></iframe>
            </AspectRatio>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default PositivePsychologyBasedExercises;
