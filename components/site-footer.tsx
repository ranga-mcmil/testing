import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

function getCopyrightText() {
  const currentYear = new Date().getFullYear();
  const copyrightTemplate = "Copyright © ${currentYear} Fiscit. All rights reserved.";
  return copyrightTemplate?.replace("${currentYear}", String(currentYear));
}

export function SiteFooter({
  className,
}: {
  className?: string;
}) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image
            // src="/images/avatars/saasfly-logo.svg"
            src="logo.svg"

            width="100"
            height="100"
            alt=""
          />
          <p className="text-center text-sm leading-loose md:text-left">
            {getCopyrightText()}
          </p>
        </div>
        {/* <ModeToggle /> */}
      </div>
    </footer>
  );
}
