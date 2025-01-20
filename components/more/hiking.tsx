import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const difficulty = {
  1: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400",
  2: "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300",
  3: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400",
};

export default function Hiking() {
  return (
    <div>
      <Carousel
        opts={{
          align: "end",
          startIndex: 999,
        }}
        className="w-1/2 ml-12 -my-4 mb-2"
      >
        <CarouselContent>
          {Array.from({ length: 9 }).map((_, index) => (
            <CarouselItem key={index} className="basis-[20%]">
              <div className="text-center text-secondary hover:text-primary transition-all hover:bg-primary-foreground hover:border-border border border-background p-2 rounded-lg">
                <p>{index + 10}</p>
                <p className="text-xs">JUN</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="rounded-lg p-5" />
        <CarouselNext className="rounded-lg p-5" />
      </Carousel>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        <Card className="bg-primary-foreground col-span-1 rounded-xl"></Card>
        <div className="col-span-1">
          <p className="text-xl">Mount Rainier Summit Trail</p>
          <p className="text-secondary">
            A challenging ascent through alpine meadows to the iconic peak
          </p>

          <span className="flex gap-2 items-center mt-2">
            <p>Difficulty:</p>
            <span className={difficulty[1]}>Easy</span>
          </span>

          <span className="flex gap-2 items-center">
            <p>Distance:</p>
            <p className="text-secondary">14.4 miles</p>
          </span>

          <span className="flex gap-2 items-center">
            <p>Duration:</p>
            <p className="text-secondary">2hr 30m</p>
          </span>

          <span className="flex gap-2 items-center mb-4">
            <p>Elevation:</p>
            <p className="text-secondary">4,400ft</p>
          </span>

          <Link
            href=""
            className="px-10 text-sm hover:text-secondary/60 transition-colors p-3 bg-primary-foreground border border-border rounded-lg"
          >
            View Route
          </Link>
        </div>
      </div>
    </div>
  );
}
