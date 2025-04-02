"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { hiking } from "@/data/data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import DashedLine from "../ui/dashed-line";

const difficulty = {
  Easy: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400",
  Medium:
    "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300",
  Hard: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400",
};

export default function Hiking() {
  const [active, setActive] = useState(hiking[0]);

  return (
    <div>
      {/* Carousel for hike dates */}
      <Carousel
        opts={{
          align: "end",
          startIndex: 999,
        }}
        className="mx-12 -my-4 mb-2"
      >
        <CarouselContent>
          {hiking.map((hike, index) => (
            <CarouselItem key={index} className="basis-[14%] sm:basis-[8%]">
              <div
                className={cn(
                  "text-center w-fit hover:cursor-pointer text-secondary hover:text-primary transition-all hover:bg-primary-foreground hover:border-border border border-background p-2 rounded-lg",
                  active === hike ? "bg-primary-foreground border-border" : ""
                )}
                onClick={() => setActive(hike)}
              >
                <p>{hike.day}</p>
                <p className="text-xs">{hike.month}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="rounded-lg p-5" />
        <CarouselNext className="rounded-lg p-5" />
      </Carousel>

      {/* Hike Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        {hiking.map((hike, index) => {
          if (hike !== active) return null;

          return (
            <React.Fragment key={index}>
              <Card className="bg-primary-foreground col-span-1 rounded-xl">
                <Image
                  src={hike.imageSrc}
                  alt={hike.name}
                  width={200}
                  height={200}
                  className="w-full aspect-square h-full object-cover rounded-xl"
                />
              </Card>
              <div className="col-span-1 flex flex-col">
                <p className="text-xl">{hike.name}</p>
                <p className="text-secondary">{hike.description}</p>

                <DashedLine orientation="horizontal" className="w-full my-2" />

                <div className="grid mb-4 grid-cols-2 sm:grid-cols-1">
                  <span className="flex gap-2 items-center mt-2">
                    <p>Difficulty:</p>
                    <span className={difficulty[hike.difficulty] || ""}>
                      {hike.difficulty}
                    </span>
                  </span>

                  <span className="flex gap-2 items-center">
                    <p>Distance:</p>
                    <p className="text-secondary">{hike.distance}</p>
                  </span>

                  <span className="flex gap-2 items-center">
                    <p>Duration:</p>
                    <p className="text-secondary">{hike.duration}</p>
                  </span>

                  <span className="flex gap-2 items-center mb-4">
                    <p>Elevation:</p>
                    <p className="text-secondary">{hike.elevation}</p>
                  </span>
                </div>

                <Link
                  href={hike.link}
                  target="_blank"
                  className="w-full flex justify-center sm:w-fit sm:px-10 text-sm hover:text-secondary/60 transition-colors p-3 bg-primary-foreground border border-border rounded-lg"
                >
                  View Route
                </Link>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
