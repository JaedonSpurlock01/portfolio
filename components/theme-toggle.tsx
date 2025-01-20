"use client";

import { useEffect, useState } from "react";
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="hover:opacity-70 mt-1 transition-all">
      {/**@ts-expect-error Author forgot to add optinal types */}
      <Expand
        duration={750}
        toggle={handleClick}
        toggled={resolvedTheme === "dark"}
        className="p-1 text-xl transition-all"
      />
    </div>
  );
}
