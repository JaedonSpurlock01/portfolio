import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/data";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import DashedLine from "./dashed-line";
import { Badge } from "./badge";

export const ProjectModal = ({
  active,
  setActive,
  id,
}: {
  active: (typeof projects)[number] | boolean | null;
  setActive: (card: (typeof projects)[number] | null) => void;
  id: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setActive(null));

  return (
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0 grid place-items-center z-[100]">
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="relative w-full max-w-[440px] border border-border md:h-fit max-h-[90%] flex flex-col bg-white dark:bg-primary-foreground sm:rounded-xl overflow-hidden"
          >
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 items-center justify-center bg-primary-foreground rounded-lg h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div layoutId={`image-${active.title}-${id}`}>
              <Image
                priority
                width={1920}
                height={1080}
                src={active.imageSrc}
                alt={active.title}
                className="w-full h-60 lg:h-60 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
              />
            </motion.div>

            <div>
              <div className="flex justify-between items-start p-4">
                <div>
                  <motion.div
                    layoutId={`title-${active.title}-${id}`}
                    layout
                    className="font-medium text-primary"
                  >
                    {active.title}
                  </motion.div>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-secondary text-sm"
                  >
                    {active.description}
                  </motion.p>

                  <DashedLine orientation="horizontal" className="w-full" />
                </div>
              </div>

              <div className="relative px-4">
                <motion.div className="text-sm text-secondary overflow-auto">
                  <p className="text-primary font-medium text-base">Features</p>
                  {active.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </motion.div>
              </div>

              <div className="relative px-4 pt-4">
                <motion.div className="text-sm text-secondary overflow-auto">
                  <p className="text-primary font-medium text-base">
                    Technologies
                  </p>
                  {active.tags.map((tag, index) => (
                    <Badge
                      className="m-1 text-secondary dark:bg-secondary/10"
                      variant="outline"
                    >
                      {tag}
                    </Badge>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="flex gap-2 items-center p-4">
              {active.websiteUrl && (
                <>
                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.websiteUrl}
                    target="_blank"
                    className="text-sm mt-10 flex gap-2 items-center text-blue-400 hover:text-blue-500 transition-colors h-fit p-2 bg-secondary/10 border border-border rounded-lg"
                  >
                    Live Preview <ExternalLink size={16} />
                  </motion.a>
                </>
              )}

              {active.githubUrl && (
                <motion.a
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  href={active.githubUrl}
                  target="_blank"
                  className="text-sm mt-10 flex gap-2 items-center hover:text-secondary/60 transition-colors h-fit p-2 bg-secondary/10 border border-border rounded-lg"
                >
                  Source Code <Github size={16} />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-secondary hover:text-primary transition-colors"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
