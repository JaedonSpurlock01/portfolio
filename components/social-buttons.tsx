import { socials } from "@/data/data";
import { Github, Linkedin, Mail, Paperclip } from "lucide-react";
import Link from "next/link";
import React from "react";

export const LinkedInButton = () => {
  return (
    <Link
      href={socials.linkedin}
      className="flex gap-2 items-center hover:text-secondary/60 transition-colors"
      target="_blank"
    >
      <Linkedin /> LinkedIn
    </Link>
  );
};

export const ContactButton = () => {
  return (
    <Link
      href={`mailto:${socials.email}`}
      className="flex gap-2 items-center hover:text-secondary/60 transition-colors"
      target="_blank"
    >
      <Mail /> Contact
    </Link>
  );
};

export const GitHubButton = () => {
  return (
    <Link
      href={socials.github}
      className="flex gap-2 items-center hover:text-secondary/60 transition-colors"
      target="_blank"
    >
      <Github /> GitHub
    </Link>
  );
};

export const ResumeButton = () => {
  return (
    <Link
      href="/resume.pdf"
      className="flex gap-2 items-center hover:text-secondary/60 transition-colors"
      target="_blank"
    >
      <Paperclip /> Resume
    </Link>
  );
};
