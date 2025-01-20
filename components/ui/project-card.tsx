import Image from "next/image";
import { projects } from "@/data/data";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({
  id,
  setActive,
  card,
}: {
  card: (typeof projects)[number];
  id: string;
  setActive: (card: (typeof projects)[number]) => void;
}) => {
  return (
    <motion.div
      layoutId={`card-${card.title}-${id}`}
      key={card.title}
      onClick={() => setActive(card)}
      className="group pb-2 hover:bg-secondary/10 border border-border transition-colors overflow-hidden flex flex-col w-full bg-primary-foreground rounded-xl text-card-foreground cursor-pointer"
    >
      <div className="flex gap-2 flex-col w-full">
        <motion.div layoutId={`image-${card.title}-${id}`}>
          <Image
            src={card.imageSrc}
            alt={card.title}
            className="w-full h-32 object-top object-cover transition-transform duration-300 group-hover:scale-105"
            width={1920}
            height={1080}
          />
        </motion.div>
        <div className="p-2 flex flex-col">
          <motion.div
            layoutId={`title-${card.title}-${id}`}
            className="text-sm flex justify-between font-medium text-primary"
            layout
          >
            {card.title}

            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform text-secondary"
            />
          </motion.div>

          <motion.p
            layoutId={`description-${card.description}-${id}`}
            className="text-secondary line-clamp-3 text-sm"
          >
            {card.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
