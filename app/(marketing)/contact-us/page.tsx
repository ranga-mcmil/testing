import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";


export const metadata = {
  title: "Contact Us",
};


export default async function PricingPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <section className="container flex flex-col items-center text-center">
        <div className="mx-auto mb-10 flex w-full flex-col gap-5">
            <p className="text-sm font-medium uppercase tracking-widest" style={{ color: "#169d52" }}>
            Contact
            </p>
            <h2 className="font-heading text-3xl leading-[1.1] md:text-5xl" style={{ color: "#1a3652" }}>
            Get in Touch with Us
            </h2>

        </div>
      </section>

      <section className="w-full px-8 sm:px-48 md:px-48 xl:h-[100vh] xl:px-48">
        <div className="grid grid-cols-1 gap-10 pb-10 md:pb-40 lg:grid-cols-2">
          <div className="flex flex-col items-start">
            <div className="flex flex-col pt-4 ">
              <ContactInfo />
            </div>
          </div>

          <div className="h-full w-full">
            <div className="flex flex-col">

              <div className="w-full">
                <div className="relative overflow-hidden rounded-lg rounded-2xl border border-[#1a3652] bg-background p-2">
                  <div className="flex flex-col rounded-md p-6 gap-4">
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
