"use client";

import React from "react";
import ThemeToggle from "./theme-toggle";
import { info } from "@/data/data";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="max-content-width">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">{info.name}</h1>

        <nav className="flex gap-4 items-center text-lg">
          <Link href="/">blog</Link>
          <Link href="/">projects</Link>
          <Link href="/">visitors</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
