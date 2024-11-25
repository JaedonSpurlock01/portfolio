import { leadership } from "@/data/data";
import { PersonStanding } from "lucide-react";
import React from "react";

export default function Leadership() {
  return (
    <div className="max-content-width">
      <span className="flex gap-2 items-center text-primary">
        <PersonStanding /> Leadership
      </span>

      {leadership.map((leadership) => (
        <div
          key={leadership.club}
          className="flex flex-col gap-2 mt-4 border-l-4 pl-4 hover:border-primary transition-colors"
        >
          <p>{leadership.club}</p>
          <p className="text-secondary text-sm">{leadership.position}</p>
        </div>
      ))}
    </div>
  );
}
