import React from "react";
import Image from "next/image";
import Link from "next/link";

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
