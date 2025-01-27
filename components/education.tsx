import { education } from "@/data/data";
import { GraduationCap } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";

export default function Education() {
  return (
    <div className="max-content-width">
      <span className="flex gap-2 items-center text-primary">
        <GraduationCap /> Education
      </span>

      {education.map((education) => (
        <div
          key={education.school}
          className="flex flex-col gap-2 mt-4 border-l-4 pl-4 hover:border-primary transition-colors"
        >
          <span className="flex gap-2 items-center">
            <p className="line-clamp-1 sm:hidden overflow-ellipsis">CSUSM</p>
            <p className="line-clamp-1 hidden sm:block overflow-ellipsis">
              {education.school}
            </p>
            <Badge className="bg-primary-foreground text-secondary hover:bg-primary-foreground">
              {education.date}
            </Badge>
          </span>
          <p className="text-secondary text-sm">{education.degree}</p>
        </div>
      ))}
    </div>
  );
}
