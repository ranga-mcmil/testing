"use client";

import React from "react";
import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";

// import { WobbleCard } from "@/packages/ui/wobble-card";

export function WobbleCardShow() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
      {/* <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      > 
        <div className="max-w-xs">
          <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
            Stay up to date
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            We are committed to continually improving our starter kit and
            providing the best possible resources for building saas service.
          </p>
        </div>
        
        <img
          src="/images/gadgets.png"
          width={500}
          height={500}
          alt="linear demo"
          className="absolute -bottom-10 -right-4 rounded-2xl object-contain grayscale filter lg:-right-[40%]"
        />
      </WobbleCard> */}
      {/* <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
          Philosophy
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          When creating this starter kit, we had several guiding principles in
          mind.
        </p>
      </WobbleCard> */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[700px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
        Simplify Your Fiscalization Process with Our Comprehensive Solution.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
        Our platform is designed to streamline fiscalization, enabling businesses to comply with regulations efficiently while saving time and resources.
          </p>
        </div>
        <Image
          src="/images/gadgets.png"
          width={500}
          height={500}
          alt="linear demo"
          className="absolute -bottom-10 right-0 left-0 mx-auto rounded-2xl object-contain"
        />
      </WobbleCard>
    </div>
  );
}
