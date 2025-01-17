import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { Badge } from "../ui/badge";

const cochlearItems = [
  {
    key: 1,
    name: "Nucleus 7",
    imageSrc: "/cochlear/N7.png",
    time: "2018 - Present",
    active: true,
  },
  {
    key: 2,
    name: "Nucleus 6",
    imageSrc: "/cochlear/N6.png",
    time: "2015 - 2018",
    active: false,
  },
  {
    key: 3,
    name: "Nucleus 5",
    imageSrc: "/cochlear/N5.png",
    time: "2013 - 2015",
    active: false,
  },
  {
    key: 4,
    name: "Freedom",
    imageSrc: "/cochlear/N5.png",
    time: "2005 - 2013",
    active: false,
  },
];

export const Cochlear = () => {
  return (
    <Card className="bg-primary-foreground aspect-square rounded-xl">
      <CardContent className="flex-1 relative pt-2 pb-0">
        <Carousel className="h-full">
          <CarouselContent className="h-full">
            {cochlearItems.map((item) => (
              <CarouselItem key={item.key}>
                <div className="h-full flex flex-col items-center justify-center gap-4">
                  <span className="flex gap-2 items-center text-secondary">
                    <p>{item.name}</p>
                  </span>
                  <Image
                    src={item.imageSrc}
                    alt={`${item.name} Image`}
                    width={100}
                    height={100}
                  />
                  <Badge variant="outline" className="gap-1.5">
                    {item.active ? (
                      <span
                        className="size-1.5 rounded-full bg-emerald-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <span
                        className="size-1.5 rounded-full bg-red-500"
                        aria-hidden="true"
                      />
                    )}
                    {item.time}
                  </Badge>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-0 w-full flex justify-between px-4 pb-4">
            <CarouselPrevious className="relative translate-x-4 -translate-y-10" />
            <CarouselNext className="relative -translate-x-4 -translate-y-10" />
          </div>
        </Carousel>
      </CardContent>
    </Card>
  );
};
