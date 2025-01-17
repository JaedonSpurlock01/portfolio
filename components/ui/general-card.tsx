import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

const GeneralCard = ({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <Card
      key={title}
      className="overflow-hidden flex flex-col w-full border border-border bg-primary-foreground"
    >
      {/* Project Image */}
      <div className="relative group overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
          width={1920}
          height={1080}
        />
      </div>

      <CardContent className="px-3 mt-4 flex-grow flex flex-col">
        <div className="flex flex-col justify-between">
          <CardTitle className="text-sm font-bold text-primary">
            {title}
          </CardTitle>
        </div>

        {/* Description */}
        <CardDescription className="text-secondary text-sm line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default GeneralCard;
