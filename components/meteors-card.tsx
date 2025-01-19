import Image from 'next/image';

import type { Meteor } from "@/types/meteors";

export function Meteorss({ meteor }: { meteor: Meteor }) {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 shadow-xl dark:bg-gray-900 dark:bg-opacity-70">
          <Image 
            src={"/images/hero.png"}
            alt="hero"
            width={700}
            height={700}
            />
        </div>
      </div>
    </div>
  );
}
