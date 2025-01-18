"use client";

import { TextGenerateEffect } from "./ui/typewriter-effect";

export function TypewriterEffectSmooths() {
  const words = [
    {
      text: "Crea",
    },
    {
      text: "miras",
    },
    {
      text: "apps",
    },
    {
      text: "et",
    },
    {
      text: "celeriter",
    },
    {
      text: "expedis",
    },
    {
      text: "cum",
    },
    {
      text: "Fiscit.",
      className: "text-blue-500",
    },
  ];
  return (
    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
      <TextGenerateEffect words={words} />
    </p>
  );
}
