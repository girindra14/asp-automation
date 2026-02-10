import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export default function BoardMobile(props: any) {
  const t = props.content;
  return (
    <div>
      <div className="container mt-8">
        <h4 className="jmso-subheading text-jmso-dark-blue leading-none text-2xl">
          {t.title}
        </h4>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="container text-jmso-dark-blue">
            <div className="inline-flex gap-1 items-center">
              {props.matsumura_logo}
              {t.matsumura.title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="container">
            {props.matsumura}
            <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
              {t.matsumura.category}
            </p>
            <h5 className="font-semibold text-xl lg:text-2xl text-jmso-dark-blue mb-2 inline-flex items-center gap-1">
              {props.matsumura_logo}
              {t.matsumura.title}
            </h5>
            <p className="text-jmso-dark-blue/60 text-xs">
              {t.matsumura.description}
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="container text-jmso-dark-blue">
            <div className="inline-flex gap-1 items-center">
              {props.kyokuto_logo}
              {t.kyokuto.title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="container">
            {props.kyokuto}
            <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
              {t.kyokuto.category}
            </p>
            <h5 className="font-semibold text-xl lg:text-2xl text-jmso-dark-blue mb-2 inline-flex items-center gap-1">
              {props.kyokuto_logo}
            {t.kyokuto.title}
            </h5>
            <p className="text-jmso-dark-blue/60 text-xs">
            {t.kyokuto.description}
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="container text-jmso-dark-blue">
            <div className="inline-flex gap-1 items-center">
              {props.yuko_logo}
               {t.yuko.title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="container">
            {props.yuko}
            <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
               {t.yuko.category}
            </p>
            <h5 className="font-semibold text-xl lg:text-2xl text-jmso-dark-blue mb-2 inline-flex items-center gap-1">
              {props.yuko_logo}
              {t.yuko.title}
            </h5>
            <div className="space-y-2">
              <p className="text-jmso-dark-blue/60 text-xs">
               {t.yuko.description}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="container text-jmso-dark-blue">
            <div className="inline-flex gap-1 items-center">
              {props.nagai_logo}
              {t.nagai.title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="container">
            {props.nagai}
            <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
               {t.nagai.category}
            </p>
            <h5 className="font-semibold text-xl lg:text-2xl text-jmso-dark-blue mb-2 inline-flex items-center gap-1">
              {props.nagai_logo}
             {t.nagai.title}
            </h5>
            <div className="space-y-2">
              <p className="text-jmso-dark-blue/60 text-xs">
                {t.nagai.description}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="container text-jmso-dark-blue">
            <div className="inline-flex gap-1 items-center">
              {props.kke_logo}
               {t.kke.title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="container">
            {props.kke}
            <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
               {t.kke.category}
            </p>
            <h5 className="font-semibold text-xl lg:text-2xl text-jmso-dark-blue mb-2 inline-flex items-center gap-1">
              {props.kke_logo}
             {t.kke.title}
            </h5>
            <p className="text-jmso-dark-blue/60 text-xs">
             {t.kke.description}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
