import ContactForm from "@/components/contact-form";


export const metadata = {
  title: "Contact Us",
};


export default async function PricingPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <section className="container flex flex-col items-center text-center">
        <div className="mx-auto mb-10 flex w-full flex-col gap-5">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <h2 className="font-heading text-3xl leading-[1.1] md:text-5xl">
            Get in Touch with Us
          </h2>

        </div>
      </section>

      <section className="w-full px-8 sm:px-48 md:px-48 xl:h-[100vh] xl:px-48">
        <div className="grid grid-cols-1 gap-10 pb-10 md:pb-40 xl:grid-cols-2">
          <div className="flex flex-col items-start">
            <div className="flex flex-col pt-4 ">





            </div>
          </div>

          <div className="h-full w-full xl:block">
            <div className="flex flex-col  h-[100vh]">

              <div className="w-full">
                <div className="relative w-full">
                  <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full blur-3xl" />
                  <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 shadow-xl dark:bg-gray-900 dark:bg-opacity-70">
                    <ContactForm />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>

  );
}
