import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function MindfulnessMeditation() {
  const contents = [
    {
      title: "Why Mindfulness Is a Superpower: An Animation",
      description:
        "Practicing mindfulness is one of the single most powerful things you can do for your wellbeing. Want to give it a try?",
      video: {
        src: "https://www.youtube.com/embed/w6T02g5hnT4",
        title: "Why Mindfulness Is a Superpower: An Animation",
      },
    },
    {
      title: "5 Minute Mindfulness Meditation",
      description:
        "Here you can listen to a 5 minute guided mindfulness meditations. For you to use when you are short on time, but still want to get into a mindful state of mind. Even five minutes can produce major benefits, give it a try... Enjoy!",
      video: {
        src: "https://www.youtube.com/embed/ssss7V1_eyA",
        title: "5 Minute Mindfulness Meditation",
      },
    },
    {
      title: "10-Minute Meditation For Anxiety",
      description:
        "Take 10 minutes from your day and let this guided meditation relieve your anxiety.",
      video: {
        src: "https://www.youtube.com/embed/O-6f5wQXSu8",
        title: "10-Minute Meditation For Anxiety",
      },
    },
    {
      title: "10 Minute Guided Meditation for Stress & Anxiety",
      description:
        "Try just 10 minutes of your day in meditation, and discover a powerful tool for alleviating stress and anxiety. By turning inward and focusing on the breath, you can create a space of calm amidst the chaos.",
      video: {
        src: "https://www.youtube.com/embed/tuPW7oOudVc",
        title: "10 Minute Guided Meditation for Stress & Anxiety",
      },
    },
    {
      title: "Mindfulness Meditation - Guided 10 Minutes",
      description:
        "In this guided mindfulness meditation you can learn to be completely present in the moment, letting go of your thoughts and achieving calmness.",
      video: {
        src: "https://www.youtube.com/embed/6p_yaNFSYao",
        title: "Mindfulness Meditation - Guided 10 Minutes",
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

export default MindfulnessMeditation;
