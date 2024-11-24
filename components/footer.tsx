import { lastUpdated } from "@/data/data";
import React from "react";
import { ContactButton, LinkedInButton } from "./social-buttons";

export default function Footer() {
  return (
    <footer className="w-full h-12 flex flex-col items-center justify-center text-secondary">
      <div className="max-content-width flex justify-between">
        <div className="flex gap-8">
          <LinkedInButton />
          <ContactButton />
        </div>

        <p>Last updated: {lastUpdated}</p>
      </div>
    </footer>
  );
}
