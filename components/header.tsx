"use client";

import { info } from "@/data/data";
import React from "react";
import AvatarImage from "./ui/avatar-image";
import {
  ContactButton,
  GitHubButton,
  LinkedInButton,
  ResumeButton,
} from "./social-buttons";
import { LocationMap } from "./map";

export default function Header() {
  return (
    <div className="max-content-width flex flex-col gap-10">
      <LocationMap />
      <div className="flex justify-between items-center">
        <div className="flex gap-4 z-10 items-center">
          <AvatarImage />
          <div>
            <h1 className="text-3xl text-primary">{info.name}</h1>
            <p className="text-lg text-secondary">{info.role}</p>
          </div>
        </div>

        <div className="flex gap-2 text-secondary z-10">
          <ResumeButton />
          <LinkedInButton />
          <GitHubButton />
          <ContactButton />
        </div>
      </div>

      <div>
        <p className="text-balance text-secondary">{info.about}</p>
      </div>
    </div>
  );
}
