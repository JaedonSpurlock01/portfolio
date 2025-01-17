import React from "react";
import { Card, CardContent } from "../ui/card";
import { MousePointer2 } from "lucide-react";

export const BasicWeatherWidget = () => {
  return (
    <Card className="bg-primary-foreground col-span-2 row-span-1 rounded-xl p-4">
      <CardContent className="p-0">
        <div className="flex justify-between">
          <span className="flex gap-2 items-center">
            <h1>Oceanside</h1>
            <MousePointer2 size={16} />
          </span>
        </div>
        <div className="flex justify-between">
          <h1 className="text-4xl text-secondary">81°</h1>

          <div className="text-right">
            <p className="text-sm">Cloudy</p>
            <p className="text-sm text-secondary">H:84° L:79°</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
