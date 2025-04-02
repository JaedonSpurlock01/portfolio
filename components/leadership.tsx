import { leadership } from "@/data/data";
import { Boxes, ChevronDown } from "lucide-react";
import React from "react";
import { Accordion, AccordionContent, AccordionItem } from "./ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Badge } from "./ui/badge";

export default function Leadership() {
  return (
    <div className="max-content-width">
      <span className="flex gap-2 items-center text-primary">
        <Boxes /> Leadership
      </span>

      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {leadership.map((item) => (
          <AccordionItem
            value={item.club}
            key={item.club}
            className="border-none"
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between transition-all [&[data-state=open]>svg]:rotate-180">
                <div
                  key={item.club}
                  className="flex flex-col items-start gap-2 mt-4 border-l-4 pl-4 hover:border-primary transition-colors"
                >
                  <span className="flex gap-2 items-center">
                    <p>{item.club}</p>
                    <Badge className="bg-primary-foreground text-secondary hover:bg-primary-foreground">
                      {item.date}
                    </Badge>
                  </span>
                  <p className="text-secondary text-sm">{item.position}</p>
                </div>
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 opacity-60 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="text-secondary/60 ml-5 mt-2 text-sm">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
