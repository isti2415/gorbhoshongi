import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

function PsychoEducationalTexts() {
  const articles = [
    {
      title: "3 Things to remember when you’re up in the night with your baby",
      description: "How to get through a sleepless night with a baby.",
      image:
        "https://wp.en.aleteia.org/wp-content/uploads/sites/2/2020/08/WEB3-MOTHER-BABY-CHILD-NIGHT-shutterstock_754235614.jpg?w=620&h=310&crop=1",
      url: "https://aleteia.org/2020/08/22/3-things-to-remember-when-youre-up-in-the-night-with-your-baby/",
    },
    {
      title: "The best gift a new mom (or any mom) can give herself",
      description:
        "Raising little ones is easier when you listen to the experiences of older moms, and a new book offers needed encouragement.",
      image:
        "https://wp.en.aleteia.org/wp-content/uploads/sites/2/2020/08/WEB3-WOMAN-MOTHER-GRANDMOTHER-DAUGHTER-BABY-CHILD-KID-FAMILY-MOTHER-IN-LAW-GRANDCHILD-GENERATIONS-shutterstock_144816268.jpg?w=620&h=310&crop=1",
      url: "https://aleteia.org/2020/08/10/the-best-gift-a-new-mom-or-any-mom-can-give-herself/",
    },
    {
      title: "5 Common myths about pregnancy debunked",
      description:
        "What's true about pregnancy and birth and what's not? Knowing can keep you calm and confident,",
      image:
        "https://wp.en.aleteia.org/wp-content/uploads/sites/2/2020/06/WEB3-PREGNANT-PREGNANCY-COUPLE-HUSBAND-WIFE-FATHER-MOTHER-FAMILY-shutterstock_604197560.jpg?w=620&h=310&crop=1",
      url: "https://aleteia.org/2020/07/04/5-common-myths-about-pregnancy-debunked/",
    },
    {
      title: "The one thing every pregnant mom should know",
      description:
        "Every mom needs to know this truth in order to be at peace.",
      image:
        "https://wp.en.aleteia.org/wp-content/uploads/sites/2/2019/06/web2-mother-who-has-just-given-birth-to-her-child-shutterstock_247499566.jpg?w=620&h=310&crop=1",
      url: "https://aleteia.org/2020/11/14/the-one-thing-every-pregnant-mom-should-know/",
    },
    {
      title: "7 Ways to take care of yourself (and baby) during pregnancy",
      description:
        "Try these tips to take great care of your soul, mind, and body while you're pregnant.",
      image:
        "https://wp.en.aleteia.org/wp-content/uploads/sites/2/2020/07/WEB3-WOMAN-PREGNANT-PREGNANCY-BABY-MOTHER-HOME-shutterstock_1565039908.jpg?w=620&h=310&crop=1",
      url: "https://aleteia.org/2020/11/07/7-ways-to-take-care-of-yourself-and-baby-during-pregnancy/",
    },
    {
      title:
        "Pregnancy Happiness: 13 Tips for Making the Most of Your Pregnancy",
      description:
        "Pregnancy can be many things — exciting, scary, and overwhelming to name a few. It can also be a time of great happiness. Whether you're already feeling happy, or hoping to get there, check out these tips for making the most of this 9 months.",
      image:
        "https://media.post.rvohealth.io/wp-content/uploads/2020/04/happy_pregnant_woman-732x549-thumbnail-732x549.jpg",
      url: "https://www.healthline.com/health/pregnancy/pregnancy-happiness",
    },
    {
      title: "Pregnancy | Alpha Mom",
      description:
        "Alpha Mom is a pregnancy and parenting blog run by Isabel Kallman. The blog provides information in an easy-to-read format, layered with reality, personal accounts, light-heartedness, and an injection of humor. Alpha Mom also answers reader’s questions in a way that seems as though you are in conversation with your best friend.",
      image: "",
      url: "https://alphamom.com/category/pregnancy/",
    },
    {
      title: "Pregnant Chicken",
      description:
        "Expecting a baby? Pregnant Chicken is the best online resource for expectant and new parents. Featuring advice and tips to help keep your pregnancy fun.",
      image: "https://pregnantchicken.com/content/images/2021/04/PC-ALT.png",
      url: "https://pregnantchicken.com/",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article, index) => (
        <Card className="flex flex-col justify-between" key={index}>
          <CardHeader>
            <CardTitle>{article.title}</CardTitle>
            <CardDescription>{article.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={1.9 / 1}>
              <Image
                src={article.image}
                fill
                alt={article.title}
                sizes="1200"
              />
            </AspectRatio>
          </CardContent>
          <CardFooter>
            <Link href={article.url} className="w-full">
              <Button className="w-full">View Article</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default PsychoEducationalTexts;
