"use client";

import { useTheme } from "next-themes";
import React from "react";

const DashedLine = ({
  orientation = "horizontal",
  length = "100%",
  dashWidth = 4,
  dashGap = 2,
  thickness = 1,
  className = "",
}) => {
  const isHorizontal = orientation === "horizontal";
  const { theme } = useTheme();

  return (
    <div
      className={`inline-flex ${className}`}
      style={{
        width: isHorizontal ? length : thickness,
        height: isHorizontal ? thickness : length,
        backgroundImage: `repeating-linear-gradient(
          ${isHorizontal ? "90deg" : "0deg"},
          ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 0,
          ${
            theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
          } ${dashWidth}px,
          transparent ${dashWidth}px,
          transparent ${dashWidth + dashGap}px
        )`,
      }}
      role="separator"
    />
  );
};

export default DashedLine;
