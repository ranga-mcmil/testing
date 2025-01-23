import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Questions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
      <AccordionTrigger>What is FDMS?</AccordionTrigger>
      <AccordionContent>
        Fiscalized Digital Management System (FDMS) is a digital system introduced by the Zimbabwe Revenue Authority (ZIMRA) to manage and track Value Added Tax (VAT) and other taxes.
      </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
      <AccordionTrigger>How does it work?</AccordionTrigger>
      <AccordionContent>
        Businesses submit their invoices to ZIMRA’s FDMS system which then records the invoices transactions electronically. ZIMRA then returns data that will allow us to generate QR codes among other information.
      </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
      <AccordionTrigger>Who should Fiscalize?</AccordionTrigger>
      <AccordionContent>
        VAT registered operators.
      </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
      <AccordionTrigger>Why do you need Fiscit?</AccordionTrigger>
      <AccordionContent>
        Fiscit saves you the hassle of going through the FDMS documentation and integrations by providing you with a solution already proven to work by our trusted customers. Fiscit provides you with different options for connecting to ZIMRA’s FDMS which includes middle integration, web portal access for individuals without an accounting system (FAAS) and Mobile fiscalization.
      </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
