"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import * as Icons from "@/components/ui/icons";

import { MobileNav } from "@/components/mobile-nav";
import { cn } from "@/lib/utils";

interface MainNavProps {
  children?: React.ReactNode;
}

export function MainNav({ children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const handleMenuItemClick = () => {
    toggleMenu();
  };

  const items = [
    {
      title: "Home",
      href: `/`,
    },
    {
      title: "Pricing",
      href: `/pricing`,
    },
    {
      title: "Contact Us",
      href: `/contact-us`,
    },
  ]

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href={`/`} className="hidden items-center space-x-2 md:flex">
        <div>
          <Image
            src="logo.svg"
            width="200"
            height="200"
            alt=""
          />
        </div>
      </Link>
      <nav className="hidden gap-6 md:flex">
        {items?.map((item, index) => (
            <Link
            key={index}
            href={`${item.href}`}
            className={cn(
              "flex items-center text-lg font-medium transition-colors hover:text-[#169d52]/80 sm:text-sm",
              (segment === null && item.href === '/') || item.href.startsWith(`/${segment}`)
              ? "text-foreground text-[#169d52]"
              : "text-foreground/60"
            )}
            >
            {item.title}
            </Link>
        ))}
      </nav>
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.Close /> : <Icons.MenuIcon />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items} menuItemClick={handleMenuItemClick}>
          {children}
        </MobileNav>
      )}
    </div>
  );
}
