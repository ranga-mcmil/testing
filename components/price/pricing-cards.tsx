// @ts-ignore
// @ts-nocheck
"use client";

import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import * as Icons from "@/components/ui/icons";
import { Switch } from "@/components/ui/switch";


import { BillingFormButton } from "@/components/price/billing-form-button";



export function PricingCards() {
  const isYearlyDefault = true;
  const [isYearly, setIsYearly] = useState<boolean>(isYearlyDefault);

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section className="container flex flex-col items-center text-center">
      <div className="mx-auto mb-10 flex w-full flex-col gap-5">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          PRICING
        </p>
        <h2 className="font-heading text-3xl leading-[1.1] md:text-5xl">
          Start at full speed !
        </h2>
      </div>

      <div className="mb-4 flex items-center gap-5">
        <span>Monthly Billing</span>
        <Switch
          checked={isYearly}
          onCheckedChange={toggleBilling}
          role="switch"
          aria-label="switch-year"
        />
        <span>Annual Billing</span>
      </div>



      <div className="mx-auto grid max-w-screen-lg gap-5 bg-inherit py-5 md:grid-cols-3 lg:grid-cols-3">

        <div className="relative flex flex-col overflow-hidden rounded-xl border">
          <div className="min-h-[150px] items-start space-y-4 bg-secondary/70 p-6">
            <p className="font-urban flex text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Starter
            </p>

            <div className="flex flex-row">
              <div className="flex items-end">
                <div className="flex text-left text-3xl font-semibold leading-6">
                  $120
                </div>
                <div className="-mb-1 ml-2 text-left text-sm font-medium">
                  <div>/mo</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between gap-16 p-6">
            <ul className="space-y-2 text-left text-sm font-medium leading-normal">

              {/* Benefits */}
              <li className="flex items-start">
                <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                <p>Up to 1 cluster per month</p>
              </li>

              <li className="flex items-start">
                <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                <p>Basic analytics and reporting</p>
              </li>

              <li className="flex items-start">
                <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                <p>Access to basic features</p>
              </li>


              {/* LIMITATIONS */}

              <li className="flex items-start text-muted-foreground">
                <Icons.Close className="mr-3 h-5 w-5 shrink-0" />
                <p>No priority access to new features</p>
              </li>

              <li className="flex items-start text-muted-foreground">
                <Icons.Close className="mr-3 h-5 w-5 shrink-0" />
                <p>Limited customer support</p>
              </li>

              <li className="flex items-start text-muted-foreground">
                <Icons.Close className="mr-3 h-5 w-5 shrink-0" />
                <p>No custom branding</p>
              </li>

              <li className="flex items-start text-muted-foreground">
                <Icons.Close className="mr-3 h-5 w-5 shrink-0" />
                <p>Limited access to business resources</p>
              </li>
            </ul>
          </div>
        </div>


        {/* <div
          className="relative flex flex-col overflow-hidden rounded-xl border"
          key={offer?.title}
        >
          <div className="min-h-[150px] items-start space-y-4 bg-secondary/70 p-6">
            <p className="font-urban flex text-sm font-bold uppercase tracking-wider text-muted-foreground">
              {offer?.title}
            </p>

            <div className="flex flex-row">
              <div className="flex items-end">
                <div className="flex text-left text-3xl font-semibold leading-6">
                  {isYearly && offer?.prices?.monthly > 0 ? (
                    <>
                      <span className="mr-2 text-muted-foreground line-through">
                        ${offer?.prices?.monthly}
                      </span>
                      <span>${offer?.prices?.yearly / 12}</span>
                    </>
                  ) : (
                    `$${offer?.prices?.monthly}`
                  )}
                </div>
                <div className="-mb-1 ml-2 text-left text-sm font-medium">
                  <div>{dict.mo}</div>
                </div>
              </div>
            </div>
            {offer.prices.monthly > 0 ? (
              <div className="text-left text-sm text-muted-foreground">
                {isYearly
                  ? `$${offer?.prices?.yearly} ${dict.annual_info}`
                  : `${dict.monthly_info}`}
              </div>
            ) : null}
          </div>

          <div className="flex h-full flex-col justify-between gap-16 p-6">
            <ul className="space-y-2 text-left text-sm font-medium leading-normal">
              {offer?.benefits.map((feature) => (
                <li className="flex items-start" key={feature}>
                  <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                  <p>{feature}</p>
                </li>
              ))}

              {offer?.limitations?.length > 0 &&
                offer.limitations.map((feature) => (
                  <li
                    className="flex items-start text-muted-foreground"
                    key={feature}
                  >
                    <Icons.Close className="mr-3 h-5 w-5 shrink-0" />
                    <p>{feature}</p>
                  </li>
                ))}
            </ul>

            {userId && subscriptionPlan ? (
              offer?.id === "starter" ? (
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    className: "w-full",
                    variant: "default",
                  })}
                >
                  {dict.go_to_dashboard}
                </Link>
              ) : (
                <BillingFormButton
                  year={isYearly}
                  offer={offer}
                  subscriptionPlan={subscriptionPlan}
                  dict={dict}
                />
              )
            ) : (
              <Button onClick={signInModal.onOpen}>{dict.signup}</Button>
            )}
          </div>
        </div> */}




        {/* {pricingData.map(
          (offer: {
            title:
              | boolean
              | Key
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | PromiseLikeOfReactNode
              | null
              | undefined;
            prices: {
              monthly:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | PromiseLikeOfReactNode
                | null
                | undefined;
              yearly: number;
            };
            benefits: any[];
            limitations: any[];
            id: string;
          }) => (
            
          ),
        )} */}
      </div>

      <p className="mt-3 text-center text-base text-muted-foreground">
        <Balancer>
          Email{" "}
          <a
            className="font-medium text-primary hover:underline"
            href="mailto:support@/packages.io"
          >
            support@/packages.io
          </a>{" "}
          for to contact our support team.
          <br />
          <strong>You can test the subscriptions and won&apos;t be charged.</strong>
        </Balancer>
      </p>
    </section>
  );
}
