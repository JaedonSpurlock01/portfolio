import { work } from "@/data/data";
import { BriefcaseBusiness } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { ChevronDown } from "lucide-react";

export default function Experience() {
  return (
    <div className="max-content-width">
      <span className="flex gap-2 items-center text-primary">
        <BriefcaseBusiness /> Work Experience
      </span>

      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {work.map((item) => (
          <AccordionItem
            value={item.date}
            key={item.date}
            className="border-none"
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between transition-all [&[data-state=open]>svg]:rotate-180">
                <div
                  key={item.company}
                  className="flex flex-col gap-2 mt-4 border-l-4 pl-4 hover:border-primary transition-colors"
                >
                  <span className="flex gap-2 items-center">
                    <p>{item.company}</p>
                    <Badge className="bg-primary-foreground text-secondary hover:bg-primary-foreground">
                      {item.date}
                    </Badge>
                  </span>
                  <p className="text-secondary text-sm">
                    {item.position} / {item.location}
                  </p>
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
