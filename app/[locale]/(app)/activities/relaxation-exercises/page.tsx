import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

function RelaxationExercises() {
  const contents = [
    {
      title:
        "Progressive Muscle Relaxation - Simple Guided Calming Exercise for Beginners | Hands-On Meditation",
      description:
        "A calming exercise that involves tensing and releasing different muscle groups.",
      video: {
        src: "https://www.youtube.com/embed/Z21Xslddz3Y",
        title:
          "Progressive Muscle Relaxation - Simple Guided Calming Exercise for Beginners | Hands-On Meditation",
      },
    },
    {
      title:
        "Box breathing relaxation technique: how to calm feelings of stress or anxiety",
      description:
        "In stressful times you can use the power of your breath to help calm feelings of stress or anxiety. Box breathing is a simple relaxation technique that can help you ‘reset your breath’ and return it to its normal rhythm. This video demonstrates box breathing and highlights its benefits.",
      video: {
        src: "https://www.youtube.com/embed/tEmt1Znux58",
        title:
          "Box breathing relaxation technique: how to calm feelings of stress or anxiety",
      },
    },
    {
      title:
        "4-7-8 Calm Breathing Exercise | 10 Minutes of Deep Relaxation | Anxiety Relief | Pranayama Exercise",
      description:
        "4-7-8 rhythmic breathing is a core part of many meditation and yoga practices as it promotes relaxation and can also be used to help you fall asleep in a shorter period of time. The goal is to calm your sympathetic nervous system, which controls the fight-or-flight response.",
      video: {
        src: "https://www.youtube.com/embed/LiUnFJ8P4gM",
        title:
          "4-7-8 Calm Breathing Exercise | 10 Minutes of Deep Relaxation | Anxiety Relief | Pranayama Exercise",
      },
    },
    {
      title: "Progressive Muscle Relaxation Training",
      description:
        'Learn the skill of "progressive muscle relaxation."  This is a skill that builds awareness of muscle tension in your body and (with daily practice) allows you to release that tension when you want to.  The video takes about 15 minutes to complete.  The movements for the exercise are shown by the blue figure, to help you know how to tense and relate the different muscle groups.',
      video: {
        src: "https://www.youtube.com/embed/ihO02wUzgkc",
        title: "Progressive Muscle Relaxation Training",
      },
    },
    {
      title: "Reduce Stress through Progressive Muscle Relaxation (3 of 3)",
      description:
        "Progressive Muscle Relaxation is a deep relaxation technique that can be performed in many different settings.  Practicing progressive muscle relaxation several times per week has been shown to improve stress, anxiety, sleep, and pain.  Follow along as Drs. Neda Gould and Dana DiRenzo demonstrate.",
      video: {
        src: "https://www.youtube.com/embed/ClqPtWzozXs",
        title: "Reduce Stress through Progressive Muscle Relaxation (3 of 3)",
      },
    },
    {
      title: "Steps for Stress | Relaxation exercise",
      description:
        "Dr Alastair Dobbin demonstrates a relaxation technique, with help from Lesley.",
      video: {
        src: "https://www.youtube.com/embed/FuEcLeNQe2Q",
        title: "Steps for Stress | Relaxation exercise",
      },
    },
    {
      title: "How to do Progressive Muscle Relaxation",
      description:
        "Progressive muscle relaxation is a relaxation technique that reduces stress and anxiety in your body by having you slowly tense and then relax each muscle. Progressive muscle relaxation can provide an immediate feeling of relaxation, but it’s best to practice frequently. With experience, you will become more aware of when you are experiencing tension and you will have the skills to help you relax.",
      video: {
        src: "https://www.youtube.com/embed/1nZEdqcGVzo",
        title: "How to do Progressive Muscle Relaxation",
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

export default RelaxationExercises;
