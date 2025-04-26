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
      <div className="flex flex-col items-start md:flex-row gap-10 md:gap-0 md:justify-between md:items-center">
        <div className="flex gap-4 z-10 items-center">
          <AvatarImage />
          <div>
            <h1 className="text-lg md:text-xl text-primary font-semibold">
              {info.name}
            </h1>
            <p className="text-secondary">{info.role}</p>
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
        <p className="text-sm text-secondary">
          Hello! I&apos;m a software engineer with{" "}
          <span className="text-primary">
            multiple industry and student leadership experiences
          </span>
          . I&apos;m looking to contribute to impactful, multi-disciplinary
          engineering projects. I have experience in
          <span className="text-primary">full-stack development</span>,{" "}
          <span className="text-primary">devops</span>, and{" "}
          <span className="text-primary">infrastructure (IaC)</span>.
        </p>
        <p className="text-sm mt-2 text-secondary">
          I was born completely deaf and advocate for the hard-of-hearing (HoH).
          Learn more about my story{" "}
          <a href="/blog/hearing-journey" className="underline text-primary">
            here
          </a>
        </p>
      </div>
    </div>
  );
}
