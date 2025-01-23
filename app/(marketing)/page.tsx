import Link from "next/link";

import * as Icons from "@/components/ui/icons";
import { Comments } from "@/components/comments";
import { DocumentGuide } from "@/components/document-guide";
import { HeroImageCard } from "@/components/hero-image-card";
import { Questions } from "@/components/questions";
import ShimmerButton from "@/components/shimmer-button";
import { WobbleCardShow } from "@/components/wobble";
import { WordReveal } from "@/components/word-reveal";
import { FeatureGrid } from "@/components/features";

export const metadata = {
  title: "Home",
};

export default async function IndexPage() {

  return (
    <>
      <section className="w-full px-8 sm:px-48 md:px-48 xl:h-[100vh] xl:px-48">
        <div className="grid grid-cols-1 gap-10 pb-10 md:pb-40 xl:grid-cols-2">
          <div className="flex flex-col items-start">
            <div className="flex flex-col pt-4 md:pt-28 lg:pt-28 xl:pt-28">
              <Link href="/" target="_blank">
                <DocumentGuide>
                  Introducing POS
                </DocumentGuide>
              </Link>

              <div className="mt-6">
                <h1 className="relative mb-6 max-w-4xl text-left text-4xl font-bold text-[#1a3652] dark:text-zinc-100 sm:text-7xl md:text-7xl xl:text-5xl">
                  Fiscit: Your partner in integrations with FDMS.
                </h1>
              </div>

              <div>
                <span className="text-zinc-500 sm:text-xl">
                  Fiscit offers different flavours of ficalization solutions that include mobile fiscalization, FAAS, and  fiscalization middleware for your accounting systems.
                </span>
              </div>

              <div className="mb-4 mt-6 flex w-full flex-col justify-center space-y-4 sm:flex-row sm:justify-start sm:space-x-8 sm:space-y-0">
                <Link href={`/`}>
                  <ShimmerButton className="mx-auto flex justify-center">
                    <span className="z-10 w-48 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent">
                      Get Started
                    </span>
                  </ShimmerButton>
                </Link>

                <Link href="/" target="">
                  <div className="flex h-full items-center justify-center">
                    <Icons.Phone className="mr-2 h-6 w-6" />
                    <span className="text-base font-semibold text-[#1a3652]">
                      Contact Us
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden h-full w-full xl:block">
            <div className="flex flex-col pt-28 h-[100vh]">
              <HeroImageCard />
            </div>
          </div>
        </div>
      </section>

      <section className="hidden h-[100vh] w-full xl:block">
        <div className="flex h-full w-full justify-between px-[220px]">
          <div className="flex w-[60%] flex-col pr-4 pt-40">
            <WobbleCardShow />
          </div>
          <div className="h-full w-[40%]">
            <div className="flex flex-col pl-[120px]">
              <WordReveal />
            </div>
          </div>
        </div>
      </section>

      <section className="hidden h-[100vh] w-full xl:block">
        <div className="flex h-full w-full justify-between px-[220px]">
          <div className="flex w-[60%] flex-col pr-4 pt-40">
            <div className="xl:pt-[100px]">
              <Questions />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-8 xl:hidden">
        <Questions />
      </section>

      <section className="w-full px-8 pt-10 sm:px-0 sm:pt-0 md:px-0 md:pt-0 xl:px-0 xl:pt-0">
        <div className="flex h-full w-full flex-col items-center pb-[100px] pt-10">
          <div>
            <h1 className="mb-6 text-center text-3xl font-bold text-[#1a3652] dark:text-zinc-100 md:text-5xl">
              Our Services
            </h1>
          </div>
            <div className="mb-6 text-xl text-[#1a3652] dark:text-zinc-100 md:text-xl">
            Discover the range of services we offer.
            </div>

          <FeatureGrid
              title="Features"
              subtitle="Unlock powerful capabilities for your project."
              items={[
                {
                  icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#169d52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-blocks"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>                  ),
                  title: "Integration Middleware",
                  description:
                    "Our integration middleware allows you our customer to integrate your accounting system or any system to zimra for invoice processing. We can integrate to SAP B1, Sage, Xero, Pastel and Point of Sale",
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#169d52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-receipt-text"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M14 8H8"/><path d="M16 12H8"/><path d="M13 16H8"/></svg>
                  ),
                  title: "Fiscalization as a service (FAAS)",
                  description:
                    "Our Web based fiscalization portal allows you to create invoices and submit invoices to Zimra without needing an accounting system.",
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#169d52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                  ),
                  title: "Mobile Fiscalization",
                  description:
                    "Our mobile based fiscalization application, allows you to fiscalize your invoices by creating them within the mobile app giving you convince .",
                },
                
              ]}
            />
        </div>
      </section>

      <section className="w-full px-8 pt-10 sm:px-0 sm:pt-0 md:px-0 md:pt-0 xl:px-0 xl:pt-0">
        <div className="flex h-full w-full flex-col items-center pb-[100px] pt-10">
          <div>
            <h1 className="mb-6 text-center text-3xl font-bold text-[#1a3652] dark:text-zinc-100 md:text-5xl">
              What People Are Saying
            </h1>
          </div>
            <div className="mb-6 text-xl text-[#1a3652] dark:text-zinc-100 md:text-xl">
            Don’t just take our word for it. Here’s what{" "}
            <span className="font-bold">real people</span> are saying about
            us.
            </div>

          <div className="w-full overflow-x-hidden">
            <Comments />
          </div>
        </div>
      </section>
    </>
  );
}
