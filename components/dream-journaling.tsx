import React from "react";
import { Card } from "./ui/card";
import { Calendar } from "./ui/calendar";

export default function DreamJournaling() {
  return (
    <div className="max-content-width overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <Card className="bg-primary-foreground col-span-1 rounded-xl">
          <Calendar mode="single" selected={new Date()} />{" "}
        </Card>
        <Card className="bg-primary-foreground col-span-1 rounded-xl flex flex-col items-center justify-center">
          <p className="text-primary text-sm font-semibold">Total Entries</p>
        </Card>
        <Card className="bg-primary-foreground col-span-1 rounded-xl flex flex-col items-center justify-center">
          Favorite Entry
        </Card>
      </div>
    </div>
  );
}
