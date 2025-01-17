import { organizations } from "@/data/data";
import { UsersRound } from "lucide-react";
import React from "react";
import GeneralCard from "./ui/general-card";

export default function Organizations() {
  return (
    <div className="max-content-width overflow-hidden">
      <span className="flex gap-2 items-center text-primary">
        <UsersRound /> Organizations
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {organizations.map((org) => (
          <GeneralCard key={org.title} {...org} />
        ))}
      </div>
    </div>
  );
}
