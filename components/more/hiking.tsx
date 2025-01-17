import React from "react";
import { Card } from "../ui/card";

export default function Hiking() {
  return (
    <div className="max-content-width overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <Card className="bg-primary-foreground col-span-1 rounded-xl">
          Images
        </Card>
        <Card className="bg-primary-foreground col-span-1 rounded-xl flex flex-col items-center justify-center">
          Tracker
        </Card>
        <Card className="bg-primary-foreground col-span-1 rounded-xl flex flex-col items-center justify-center">
          Location
        </Card>
      </div>
    </div>
  );
}
