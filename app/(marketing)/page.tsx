import Link from "next/link";

import * as Icons from "@/components/ui/icons";
import { ComponentProps, ReactNode } from "react";
import { Comments } from "@/components/comments";
import { DocumentGuide } from "@/components/document-guide";
import { FeaturesCard } from "@/components/features-card";
import { Meteorss } from "@/components/meteors-card";
import { Questions } from "@/components/questions";
import ShimmerButton from "@/components/shimmer-button";
import { TypewriterEffectSmooths } from "@/components/typewriterEffectSmooth";
import { WobbleCardShow } from "@/components/wobble";
import { WordReveal } from "@/components/word-reveal";
import type { Locale } from "@/config/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import type { Meteor } from "@/types/meteors";
import styles from "./page.module.css";
import clsx from "clsx";
// import { Container } from "@/components/Container";
// import { Container } from "@/primitives/Container";
import { Container } from "@/components/Container/index";
import { cn } from "@/lib/utils";






const meteors_data: Meteor = {
  name: "Let’s Chat on WhatsApp",
  description:
    "Connect with our team on WhatsApp to discuss fiscalization solutions, get support, and stay updated.",
  button_content: "Chat with us",
  url: "https://discord.gg/8SwSX43wnD",
};


interface FeatureProps extends Omit<ComponentProps<"div">, "title"> {
  description: ReactNode;
  title: ReactNode;
}

function Feature({ title, description, className, ...props }: FeatureProps) {
  return (
    <div className={clsx(className, styles.featuresFeature)} {...props}>
      <h4 className={styles.featuresFeatureTitle}>{title}</h4>
      <p className={styles.featuresFeatureDescription}>{description}</p>
    </div>
  );
}

export default async function IndexPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <section className="w-full px-8 sm:px-48 md:px-48 xl:h-[100vh] xl:px-48">
        <div className="grid grid-cols-1 gap-10 pb-10 md:pb-40 xl:grid-cols-2">
          <div className="flex flex-col items-start">
            <div className="flex flex-col pt-4 md:pt-28 lg:pt-28 xl:pt-28">
              <Link href="" target="_blank">
                <DocumentGuide>
                  {dict.marketing.introducing || "Introducing Saasfly"}
                </DocumentGuide>
              </Link>

              <div className="mt-6">
                <h1 className="relative mb-6 max-w-4xl text-left text-4xl font-bold dark:text-zinc-100 sm:text-7xl md:text-7xl xl:text-7xl">
                  {dict.marketing.title ||
                    "Saasfly: A new SaaS player? Make things easier."}
                </h1>
              </div>

              <div>
                <span className="text-zinc-500 sm:text-xl">
                  {dict.marketing.sub_title ||
                    "Your complete All-in-One solution for building SaaS services."}
                </span>
                {/* <TypewriterEffectSmooths /> */}
              </div>

              <div className="mb-4 mt-6 flex w-full flex-col justify-center space-y-4 sm:flex-row sm:justify-start sm:space-x-8 sm:space-y-0">
                <Link href={`/`}>
                  <ShimmerButton className="mx-auto flex justify-center">
                    <span className="z-10 w-48 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent">
                      {dict.marketing.get_started}
                    </span>
                  </ShimmerButton>
                </Link>

                <Link href="/" target="">
                  <div className="flex h-full items-center justify-center">
                    <Icons.Phone className="mr-2 h-6 w-6" />
                    <span className="text-base font-semibold">
                      {dict.marketing.view_on_github || "View on GitHub"}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden h-full w-full xl:block">
            <div className="flex flex-col pt-28 h-[100vh]">

              <Meteorss meteor={meteors_data} />


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
            <h1 className="mb-6 text-center text-3xl font-bold dark:text-zinc-100 md:text-5xl">
              Our Services
            </h1>
          </div>
          <div className="mb-6 text-xl dark:text-zinc-100 md:text-xl">
            Discover the range of services we offer.
          </div>


            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center py-4 sm:py-20 md:py-20 xl:py-20">
                <figure
                className={cn(
                "relative w-full max-w-xs cursor-pointer overflow-hidden rounded-2xl border border-gray-800 shadow-xl p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                )}
                >
                <div className="flex flex-col  gap-2">
                <Icons.Logo className="h-6 w-6 text-gray-800 dark:text-white" />
                
                <figcaption className="text-lg font-semibold dark:text-white">
                  Integration middleware
                </figcaption>
                </div>
                <p className="mt-2 text-sm">
                Our integration middleware allows you our customer to integrate your accounting system or any system to zimra for invoice processing. We can integrate to SAP B1, Sage, Xero, Pastel and Point of Sale                </p>
                </figure>
              <figure
                className={cn(
                  "relative w-full max-w-xs cursor-pointer overflow-hidden rounded-2xl border border-gray-800 shadow-xl p-4",
                  // light styles
                  "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                  // dark styles
                  "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                )}
              >
                <div className="flex flex-col gap-2">
                  <Icons.Logo className="h-6 w-6 text-gray-800 dark:text-white" />
                  <figcaption className="text-lg font-semibold dark:text-white">
                    Fiscalization as a service (FAAS)
                  </figcaption>
                </div>
                <p className="mt-2 text-sm">
                Our Web based fiscalization portal allows you to create invoices and submit invoices to Zimra without needing an accounting system. 
                <br /> 
                <br /> 
                
                </p>
              </figure>

              <figure
                className={cn(
                  "relative w-full max-w-xs cursor-pointer overflow-hidden rounded-2xl border border-gray-800 shadow-xl p-4",
                  // light styles
                  "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                  // dark styles
                  "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                )}
              >
                <div className="flex flex-col gap-2">
                  <Icons.Logo className="h-6 w-6 text-gray-800 dark:text-white" />
                  <figcaption className="text-lg font-semibold dark:text-white">
                  Mobile Fiscalization
                  </figcaption>
                </div>
                <p className="mt-2  text-sm">
                Our mobile based fiscalization application, allows you to fiscalize your invoices by creating them within the mobile app giving you convince .
                <br />
                <br />
                </p>
              </figure>
              
              
            </div>




          
        </div>
      </section>

      <section className="w-full px-8 pt-10 sm:px-0 sm:pt-0 md:px-0 md:pt-0 xl:px-0 xl:pt-0">
        <div className="flex h-full w-full flex-col items-center pb-[100px] pt-10">
          <div>
            <h1 className="mb-6 text-center text-3xl font-bold dark:text-zinc-100 md:text-5xl">
              What People Are Saying
            </h1>
          </div>
          <div className="mb-6 text-xl dark:text-zinc-100 md:text-xl">
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
