import React from "react";
import { Button } from "./ui/button";

const Skills = () => {
  const buttonClass =
    "w-full py-3 bg-primary-foreground border border-border text-secondary hover:text-primary hover:bg-primary-foreground/60 transition-colors";

  return (
    <div className="max-content-width">
      <span className="flex gap-2 items-center text-primary">Skills</span>

      <div className="flex gap-2 mt-4">
        <Button className={buttonClass}>Frontend</Button>
        <Button className={buttonClass}>Backend</Button>
        <Button className={buttonClass}>Embedded Systems</Button>
      </div>
    </div>
  );
};

export default Skills;
