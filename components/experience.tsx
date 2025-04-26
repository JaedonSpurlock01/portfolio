import { work } from "@/data/data";
import React from "react";
import { Title } from "./ui/title";
import { Dot } from "lucide-react";

export default function Experience() {
  return (
    <div className="max-content-width">
      <Title title="Experience" />

      <div className="flex flex-col gap-4 mt-4">
        {work.map((item, index) => (
          <div key={index} className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <p className="text-muted-foreground text-sm">{item.date}</p>

            <div className="col-span-3">
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-primary/90">
                  <span className="underline">{item.company}</span> |{" "}
                  {item.position}
                </p>

                <p className="text-xs flex items-center text-muted-foreground hover:text-primary cursor-pointer">
                  <Dot /> Location
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-1 leading-6">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
