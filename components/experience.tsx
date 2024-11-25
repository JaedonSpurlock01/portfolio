import { work } from "@/data/data";
import { BriefcaseBusiness } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";

export default function Experience() {
  return (
    <div className="max-content-width">
      <span className="flex gap-2 items-center text-primary">
        <BriefcaseBusiness /> Work Experience
      </span>

      {work.map((work) => (
        <div
          key={work.company}
          className="flex flex-col gap-2 mt-4 border-l-4 pl-4 hover:border-primary transition-colors"
        >
          <span className="flex gap-2 items-center">
            <p>{work.company}</p>
            <Badge className="bg-primary-foreground text-secondary">
              {work.date}
            </Badge>
          </span>
          <p className="text-secondary text-sm">
            {work.position} / {work.location}
          </p>
        </div>
      ))}
    </div>
  );
}
