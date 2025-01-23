import { cn } from "./ui";
import Marquee from "./ui/marquee";
import Image from 'next/image';


const reviews = [
  {
    name: "Tafara Mutembedza",
    username: "@tafara",
    body: "Fiscit made our compliance with Zimbabwe's fiscalization regulations a breeze. Their expert guidance and reliable solutions saved us time and headaches.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Tapiwa",
    username: "@tapiwa",
    body: "We were struggling to understand the complexities of fiscalization. Fiscit provided clear explanations and tailored solutions that perfectly fit our business needs.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Kudakwashe",
    username: "@kudakwashe",
    body: "Fiscit's customer support is exceptional. They are always available to answer our questions and provide prompt assistance whenever we need it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Tapiwa",
    username: "@tapiwa",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Comments = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-4 sm:py-20 md:py-20 xl:py-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export { Comments };
