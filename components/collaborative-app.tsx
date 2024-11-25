"use client";

import { User } from "lucide-react";
import DashedLine from "./ui/dashed-line";

export function CollaborativeApp() {
  return (
    <div className="max-content-width border border-border rounded-lg bg-primary-foreground">
      <div className="flex items-center justify-between py-2 px-4 w-full">
        <h1 className="text-secondary text-sm">Collaborate</h1>
        <DashedLine orientation="horizontal" length="75%" />
        <span className="flex items-center gap-2 text-secondary text-sm">
          <User size={14} />
          <p>10</p>
        </span>
      </div>
    </div>
  );
}
