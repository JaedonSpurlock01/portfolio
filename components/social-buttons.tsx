import { socials } from "@/data/data";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export const LinkedInButton = () => {
  return (
    <Link
      href={socials.linkedin}
      className="flex gap-2 items-center text-white hover:text-white/60 transition-colors h-fit p-2 bg-[#0b66c2] hover:bg-[#0b66c2]/60 border border-border rounded-lg"
      target="_blank"
    >
      <Linkedin size={16} />
    </Link>
  );
};

export const ContactButton = () => {
  return (
    <Link
      href={`mailto:${socials.email}`}
      className="flex gap-2 items-center hover:text-secondary/60 transition-colors h-fit p-2 bg-primary-foreground border border-border rounded-lg"
      target="_blank"
    >
      <Mail size={16} />
    </Link>
  );
};

export const GitHubButton = () => {
  return (
    <Link
      href={socials.github}
      className="flex gap-2 items-center hover:text-secondary/60 transition-colors h-fit p-2 bg-primary-foreground border border-border rounded-lg"
      target="_blank"
    >
      <Github size={16} />
    </Link>
  );
};

export const ResumeButton = () => {
  return (
    <Link
      href="/resume.pdf"
      className="flex text-sm gap-2 items-center hover:text-secondary/60 transition-colors h-fit p-2 bg-primary-foreground border border-border rounded-lg"
      target="_blank"
    >
      Resume <Download size={16} />
    </Link>
  );
};
