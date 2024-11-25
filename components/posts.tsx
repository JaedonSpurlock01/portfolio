import { Book } from "lucide-react";
import React from "react";

export default function Posts() {
  return (
    <div className="max-content-width">
      <span className="flex gap-2 items-center text-primary">
        <Book /> My blog
      </span>

      <div className="flex flex-col gap-2 mt-4 border-l-4 pl-4 hover:border-primary transition-colors">
        <p>Revolutionizing the Future of AI</p>
        <p className="text-secondary text-sm">November 30, 2024</p>
      </div>
      <div className="flex flex-col gap-2 mt-4 border-l-4 pl-4 hover:border-primary transition-colors">
        <p>Significance of Documentation</p>
        <p className="text-secondary text-sm">October 20, 2024</p>
      </div>
      <div className="flex flex-col gap-2 mt-4 border-l-4 pl-4 hover:border-primary transition-colors">
        <p>Why software engineering?</p>
        <p className="text-secondary text-sm">August 15, 2024</p>
      </div>
    </div>
  );
}
