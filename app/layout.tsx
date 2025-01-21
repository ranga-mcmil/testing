import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

// import { Suspense } from "react";
// import { PostHogPageview } from "~/config/providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../styles/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "fiscalization",
    "Shadcn ui",
    "Sass",
    "Fast ",
    "Simple ",
    "Easy",
    "Cloud Native",
  ],
  authors: [
    {
      name: "saasfly",
    },
  ],
  creator: "Saasfly",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/logo-small.svg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://goofl.com"),
  // manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      {/*<Suspense>*/}
      {/*  <PostHogPageview />*/}
      {/*</Suspense>*/}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Set light as the default theme
          enableSystem={false}
        >
          {children}
          
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
