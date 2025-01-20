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
import Link from "next/link";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="col-span-1 rounded-xl px-12">
        <Image
          src="/cochlear/n7.png"
          alt="Cochlear Implant"
          width={500}
          height={500}
        />
      </div>

      <div className="col-span-1">
        <p className="text-xl">Hearing Processors</p>
        <p className="text-secondary mb-4">
          Cochlear implants are a vital part of who I am. They allow me to
          artificially process and understand hearing signals, almost identical
          to human hearing.
        </p>

        <Link
          href="https://www.mayoclinic.org/tests-procedures/cochlear-implants/about/pac-20385021"
          target="_blank"
          className="px-10 text-sm hover:text-secondary/60 transition-colors p-3 bg-primary-foreground border border-border rounded-lg"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};
