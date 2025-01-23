import Balancer from "react-wrap-balancer";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function PricingFaq() {
  const pricingFaqData = [
    {
      id: "item-1",
      question: "Do you charge for a demo?",
      answer:
        "No, we do not charge for a demo just book an appointment with us info@fiscit.co.zw",
    },
    {
      id: "item-2",
      question: "Are there any set up costs?",
      answer:
        "Yes, when we initially set up your system to communicate with our middleware.\nYes, when we set up an account on our FAAS (web portal).",
    },
    {
      id: "item-3",
      question: "Do you charge a monthly fee?",
      answer:
        "Yes, we charge a monthly support and maintenance fee, that can be paid quarterly (every 3 months), semi-annually (6 months) or annually (12 months).",
    },
  ];

  return (
    <section className="container max-w-3xl py-2">
      <div className="mb-14 space-y-6 text-center">
        <h1 className="font-heading text-center text-3xl md:text-5xl" style={{ color: "#1a3652" }}>
          <Balancer>Frequently Asked Questions</Balancer>
        </h1>
        <p className="text-md text-muted-foreground">
          <Balancer>Explore our comprehensive FAQ to find quick answers to common inquiries. If you need further assistance, don&apos;t hesitate to contact us for personalized help.</Balancer>
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {pricingFaqData?.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent>{faqItem.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
