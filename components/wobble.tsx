"use client";

import React from "react";
import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";

// import { WobbleCard } from "@/packages/ui/wobble-card";

export function WobbleCardShow() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
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
