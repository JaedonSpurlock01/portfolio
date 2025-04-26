import React from "react";

const DashedLine = ({
  orientation = "horizontal",
  length = "100%",
  thickness = 1,
  className = "",
}) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={`inline-block border-muted-foreground/20 ${
        isHorizontal ? "border-t border-dashed" : "border-l border-dashed"
      } ${className}`}
      style={{
        width: isHorizontal ? length : thickness,
        height: isHorizontal ? thickness : length,
      }}
      role="separator"
    />
  );
};

export default DashedLine;
