"use client";

import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="hover:opacity-70 mt-1 transition-all">
      {/**@ts-expect-error Author forgot to add optinal types */}
      <Expand
        duration={750}
        toggle={handleClick}
        toggled={theme === "dark"}
        className="p-1 text-xl transition-all"
      />
    </div>
  );
}
