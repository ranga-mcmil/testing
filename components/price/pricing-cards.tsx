"use client";


import Balancer from "react-wrap-balancer";

import * as Icons from "@/components/ui/icons";



export function PricingCards() {
  // const isYearlyDefault = true;
  // const [isYearly, setIsYearly] = useState<boolean>(isYearlyDefault);

  // const toggleBilling = () => {
  //   setIsYearly(!isYearly);
  // };

  return (
    <section className="container flex flex-col items-center text-center">
      <div className="mx-auto mb-10 flex w-full flex-col gap-5">
        <p className="text-sm font-medium uppercase tracking-widest" style={{ color: "#169d52" }}>
          PRICING
        </p>
        <h2 className="font-heading text-3xl leading-[1.1] md:text-5xl" style={{ color: "#1a3652" }}>
          Start at full speed !
        </h2>
      </div>

      {/* <div className="mb-4 flex items-center gap-5">
        <span>Monthly Billing</span>
        <Switch
          checked={isYearly}
          onCheckedChange={toggleBilling}
          role="switch"
          aria-label="switch-year"
        />
        <span>Annual Billing</span>
      </div> */}



      <div className="mx-auto grid max-w-screen-lg gap-5 bg-inherit py-5 md:grid-cols-3 lg:grid-cols-3">

        <div className="relative flex flex-col overflow-hidden rounded-xl border">
          <div className="min-h-[150px] items-start space-y-4 bg-secondary/70 p-6">
            <p className="font-urban flex text-sm font-bold uppercase tracking-wider text-muted-foreground">
    
              Fiscalization as a Service
            </p>

            <div className="flex flex-row">
              <div className="flex items-end">
                <div className="flex text-left text-3xl font-semibold leading-6" style={{ color: "#1a3652" }}>
                  $13
                </div>
                <div className="-mb-1 ml-2 text-left text-sm font-medium">
                    <div style={{ color: "#169d52" }}>/mo</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between gap-16 p-6">
            <ul className="space-y-2 text-left text-sm font-medium leading-normal">

                {/* Benefits */}
                <li className="flex items-start">
                <Icons.Check className="mr-3 h-5 w-5 shrink-0 text-[#169d52]" />
                <p>Customer management</p>
                </li>

                <li className="flex items-start">
                <Icons.Check className="mr-3 h-5 w-5 shrink-0 text-[#169d52]" />
                <p>Device management</p>
                </li>

                <li className="flex items-start">
                <Icons.Check className="mr-3 h-5 w-5 shrink-0 text-[#169d52]" />
                <p>Generation of downloadable fiscalized invoices</p>
                </li>

                <li className="flex items-start">
                <Icons.Check className="mr-3 h-5 w-5 shrink-0 text-[#169d52]" />
                <p>Multiple devices (companies) in one account</p>
                </li>

                <li className="flex items-start">
                <Icons.Check className="mr-3 h-5 w-5 shrink-0 text-[#169d52]" />
                <p>Business reports</p>
                </li>


              {/* LIMITATIONS */}

                <li className="flex items-start text-muted-foreground">
                <Icons.Close className="mr-3 h-5 w-5 shrink-0 text-red-600" />
                <p>No priority access to new features</p>
                </li>

                <li className="flex items-start text-muted-foreground">
                <Icons.Close className="mr-3 h-5 w-5 shrink-0 text-red-600" />
                <p>Limited customer support</p>
                </li>

                <li className="flex items-start text-muted-foreground">
                <Icons.Close className="mr-3 h-5 w-5 shrink-0 text-red-600" />
                <p>No custom branding</p>
                </li>

                <li className="flex items-start text-muted-foreground">
                <Icons.Close className="mr-3 h-5 w-5 shrink-0 text-red-600" />
                <p>Limited access to business resources</p>
                </li>
            </ul>
          </div>
        </div>








        <div className="relative flex flex-col overflow-hidden rounded-xl border">
          <div className="min-h-[150px] items-start space-y-4 bg-secondary/70 p-6">
            <p className="font-urban flex text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Mobile Fiscalization
            </p>

            <div className="flex flex-row">
              <div className="flex items-end">
              <div className="flex text-left text-3xl font-semibold leading-6" style={{ color: "#1a3652" }}>
                  $15
                </div>
                <div className="-mb-1 ml-2 text-left text-sm font-medium">
                    <div style={{ color: "#169d52" }}>/mo</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between gap-16 p-6">
            <ul className="space-y-2 text-left text-sm font-medium leading-normal">

                {/* Benefits */}
                <li className="flex items-start">
                <Icons.Check className="mr-3 h-5 w-5 shrink-0 text-[#169d52]" />
                <p>Customer management</p>
                </li>

                <li className="flex items-start">
                <Icons.Check className="mr-3 h-5 w-5 shrink-0 text-[#169d52]" />
                <p>Device management</p>
                </li>

                <li className="flex items-start">
                <Icons.Check className="mr-3 h-5 w-5 shrink-0 text-[#169d52]" />
                <p>Generation of downloadable fiscalized invoices</p>
                </li>



              {/* LIMITATIONS */}

                <li className="flex items-start text-muted-foreground">
                <Icons.Close className="mr-3 h-5 w-5 shrink-0 text-red-600" />
                <p>No priority access to new features</p>
                </li>

                <li className="flex items-start text-muted-foreground">
                <Icons.Close className="mr-3 h-5 w-5 shrink-0 text-red-600" />
                <p>Limited customer support</p>
                </li>

            
            </ul>
          </div>
        </div>








        <div className="relative flex flex-col overflow-hidden rounded-xl border">
          <div className="min-h-[150px] items-start space-y-4 bg-secondary/70 p-6">
            <p className="font-urban flex text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Integration
            </p>

            <div className="flex flex-row">
                <div className="flex items-end">
                <div className="flex text-left text-3xl font-semibold leading-6" style={{ color: "#1a3652" }}>
                  Price on demand
                </div>
                </div>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between gap-16 p-6">
            <ul className="space-y-2 text-left text-sm font-medium leading-normal">

                {/* Benefits */}
                <li className="flex items-start">
                <Icons.Check className="mr-3 h-5 w-5 shrink-0 text-[#169d52]" />
                <p>Integration to 3rd party system such as Point of Sale and accounting system
                </p>
                </li>

                
            </ul>
          </div>
        </div>


      </div>







      

      <p className="mt-3 text-center text-base text-muted-foreground">
        <Balancer>
          Email{" "}
            <a
              className="font-medium text-[#169d52] hover:underline"
              href="mailto:info@fiscit.co.zw"
            >
            info@fiscit.co.zw
            </a>{" "}
          for to contact our support team.
          <br />
          <strong>You can test the subscriptions and won&apos;t be charged.</strong>
        </Balancer>
      </p>
    </section>
  );
}
