"use client";

import { CodeXml } from "lucide-react";
import React, { useEffect, useId, useState } from "react";
import ProjectCard from "./ui/project-card";
import { projects } from "@/data/data";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectModal } from "./ui/project-modal";

export default function Projects() {
  const [active, setActive] = useState<
    (typeof projects)[number] | boolean | null
  >(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      {/** Fullscreen dark background overlay */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/** Project modal that opens up on click */}
      <ProjectModal active={active} setActive={setActive} id={id} />

      <div className="max-content-width overflow-hidden">
        <span className="flex gap-2 items-center text-primary">
          <CodeXml /> Projects
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              id={id}
              setActive={setActive}
              card={project}
            />
          ))}
        </div>
      </div>
    </>
  );
}
