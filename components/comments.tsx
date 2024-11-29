"use client";

import React from "react";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

// Color: --primary-default: 20, 222, 155;
// Custom: --primary-default: 65, 131, 196
// text-[#4183C4]

const Comments = () => {
  const { theme } = useTheme();

  return (
    <div className="max-content-width">
      <Giscus
        id="blog-comments"
        repo="JaedonSpurlock01/portfolio-2024"
        repoId="R_kgDONT8Gig"
        category="General"
        categoryId="DIC_kwDONT8Gis4CksrQ"
        mapping="pathname"
        reactionsEnabled="1"
        strict="0"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === "light" ? "light" : "noborder_gray"}
        lang="en"
      />
    </div>
  );
};

export default Comments;
