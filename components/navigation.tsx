"use client";

import React from "react";
import ThemeToggle from "./theme-toggle";
import { info } from "@/data/data";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="max-content-width">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl">{info.name}</h1>
        </Link>

        <nav className="flex gap-4 items-center text-lg">
          <Link
            href="/blogs"
            className="text-secondary hover:text-secondary/60 transition-colors"
          >
            blog
          </Link>
          <Link
            href="/visitors"
            className="text-secondary hover:text-secondary/60 transition-colors"
          >
            visitors
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
