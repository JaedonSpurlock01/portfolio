"use client";

import React from "react";
import ProjectCard from "./ui/project-card";
import { projects } from "@/data/data";
import { Title } from "./ui/title";

export default function Projects() {
  return (
    <div className="max-content-width overflow-hidden">
      <Title title="Projects" />

      <div className="grid grid-cols-1 min-[520px]:grid-cols-2 gap-4 mt-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} card={project} />
        ))}
      </div>
    </div>
  );
}
