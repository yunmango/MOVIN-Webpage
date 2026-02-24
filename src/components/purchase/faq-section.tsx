"use client";

import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { FAQ_ITEMS } from "@/data/purchase";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="flex flex-col items-center px-6 py-16 md:py-24">
      <div className="w-full max-w-[760px]">
        <ScrollReveal>
          <h2 className="text-center font-ui text-[28px] font-normal text-[#1a1a1a] md:text-[32px]">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b border-[#eee]"
                >
                  <AccordionTrigger className="py-5 font-ui text-[15px] font-medium text-[#1a1a1a] hover:no-underline md:text-[16px]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-[14px] leading-[1.7] text-[#666] md:text-[15px]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
