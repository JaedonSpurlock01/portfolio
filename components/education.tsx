import { education, work } from "@/data/data";
import { GraduationCap } from "lucide-react";
import React from "react";

export default function Education() {
  return (
    <div className="max-content-width">
      <span className="flex gap-2 items-center text-primary">
        <GraduationCap /> Education
      </span>

      {education.map((education) => (
        <div key={education.school} className="flex flex-col gap-2 mt-4 border-l-4 pl-4">
          <p>{education.school}</p>
          <p className="text-secondary text-sm">{education.degree}</p>
        </div>
      ))}
    </div>
  );
}
