import { skills } from "@/data/data";
import { Box } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";

export default function Skills() {
  return (
    <div className="max-content-width">
      <span className="flex gap-2 items-center text-primary">
        <Box /> Skills
      </span>

      {Object.entries(skills).map(([skillName, skillValue]) => (
        <div
          key={skillName}
          className="flex flex-col gap-2 mt-4 border-l-4 pl-4 hover:border-primary transition-colors"
        >
          <p>{skillName}</p>
          <div className="flex gap-2 flex-wrap">
            {skillValue.map((skill) => (
              <Badge
                key={skill}
                className="bg-primary-foreground text-secondary hover:bg-primary-foreground"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
