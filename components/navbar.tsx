"use client";

import Link from "next/link";

// import { cn } from "@/packages/ui";
// import { Button, buttonVariants } from "@/packages/ui/button";

// import { LocaleChange } from "@/components/locale-change";
import useScroll from "@/hooks/use-scroll";
import type { MainNavItem } from "@/types";
import { MainNav } from "./main-nav";
import { LocaleChange } from "@/components/locale-change";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";

type Dictionary = Record<string, string>;

interface NavBarProps {
  user: Pick<{ name: string; image: string; email: string }, "name" | "image" | "email"> | undefined;
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
  params: {
    lang: string;
  };
  marketing: Dictionary;
  dropdown: Record<string, string>;
}

export function NavBar({
  user,
  items,
  children,
  rightElements,
  scroll = false,
  params: { lang },
  marketing,
  dropdown,
}: NavBarProps) {
  const scrolled = useScroll(50);
  const signInModal = () => {};
  
  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center border-border bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav items={items} params={{ lang: `${lang}` }}>
          {children}
        </MainNav>

        <div className="flex items-center space-x-3">
            
          {rightElements}
          <LocaleChange url={"/"} />
          {!user ? (
            <Link
              href={`/${lang}/login`}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              {typeof marketing.login === "string"
                ? marketing.login
                : "Default Login Text"}
            </Link>
          ) : null}

          <Button
            className="px-3"
            variant="default"
            size="sm"
            onClick={signInModal.onOpen}
          >
            {typeof marketing.signup === "string"
              ? marketing.signup
              : "Default Signup Text"}
          </Button>
        </div>
      </div>
    </header>
  );
}
