import React from "react";
import { ContactButton, LinkedInButton } from "./social-buttons";
import { ArrowDownToDot, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-12 mt-24 flex flex-col items-center justify-center text-secondary gap-4">
      <div className="max-content-width flex justify-between items-center text-sm">
        <div className="flex gap-2">
          <LinkedInButton />
          <ContactButton />
        </div>
      </div>
      <div className="max-content-width flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between text-sm">
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
            JaedonSpurlock01/portfolio <Github size={12} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
