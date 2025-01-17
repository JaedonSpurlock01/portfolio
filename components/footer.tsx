import { lastUpdated } from "@/data/data";
import React from "react";
import { ContactButton, LinkedInButton } from "./social-buttons";
import { ArrowDownToDot, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-12 flex flex-col items-center justify-center text-secondary gap-4">
      <div className="max-content-width flex justify-between text-sm">
        <div className="flex gap-2">
          <LinkedInButton />
          <ContactButton />
        </div>

        <p>Last updated: {lastUpdated}</p>
      </div>
      <div className="max-content-width flex justify-between text-sm">
        <div className="flex gap-1 items-center">
          <ArrowDownToDot size={12} />
          Made in Oceanside, CA
        </div>

        <div className="flex gap-2">
          <Link href="/colophon" target="_blank" className="underline">
            Colophon
          </Link>
          <Link
            href="https://github.com/JaedonSpurlock01/portfolio"
            target="_blank"
            className="underline flex gap-1 items-center"
          >
            <Github size={12} /> JaedonSpurlock01/portfolio
          </Link>
        </div>
      </div>
    </footer>
  );
}
