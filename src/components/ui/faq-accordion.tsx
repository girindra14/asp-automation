import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import type { Key } from "react";
import React from "react";

interface FAQ {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex flex-col gap-4 lg:gap-5"
    >
      {faqs.map((faq: { q: string; a: string; }, index: Key) => (
        <AccordionItem
          value={`FAQ ${index}`}
          key={index}
          className="bg-white rounded-xl px-4 lg:px-6 border-none"
        >
          <AccordionTrigger>
            <div className="flex justify-start items-center gap-4 lg:gap-6 pr-4">
              <span className="flex-1 p-3 min-w-10 lg:min-w-14 bg-jmso-tosca/50 font-heading rounded-full font-semibold text-white text-2xl lg:text-3xl w-10 h-10 lg:w-14 lg:h-14 inline-flex items-center justify-center">
                Q
              </span>
              <h3
                className="font-medium text-lg lg:text-2xl text-jmso-dark-blue text-left"
                dangerouslySetInnerHTML={{ __html: faq.q }}
              ></h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base lg:text-lg text-jmso-dark-blue/80 lg:pl-[80px]">
            <p dangerouslySetInnerHTML={{ __html: faq.a }}></p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
