import { Gamepad2 } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";

export default function Playground() {
  return (
    <div className="max-content-width overflow-hidden">
      <span className="flex gap-2 items-center text-primary">
        <Gamepad2 /> Playground
      </span>

      <div className="flex flex-col gap-4 mt-4">
        <Card className="bg-primary-foreground h-60 rounded-xl flex flex-col items-center justify-center">
          Typing Speed Test Race
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="bg-primary-foreground col-span-2 h-60 rounded-xl flex flex-col items-center justify-center">
            Ping Pong
          </Card>
          <Card className="bg-primary-foreground col-span-1 h-60 rounded-xl flex flex-col items-center justify-center">
            Reaction Test
          </Card>
        </div>
      </div>
    </div>
  );
}
