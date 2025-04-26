import Image from "next/image";
import { projects } from "@/data/data";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ card }: { card: (typeof projects)[number] }) => {
  return (
    <div
      key={card.title}
      className="group pb-2 overflow-hidden flex flex-col w-full cursor-pointer"
    >
      <div className="overflow-hidden rounded-lg relative">
        <Image
          src={card.imageSrc}
          alt={card.title}
          className="w-full h-44 object-top object-cover transition-transform duration-300 group-hover:scale-105"
          width={1920}
          height={1080}
        />
      </div>

      <div className="pt-2 flex flex-col">
        <div className="text-sm flex justify-between font-medium text-primary">
          {card.title}

          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform text-secondary"
          />
        </div>

        <p className="text-secondary line-clamp-2 text-sm">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
