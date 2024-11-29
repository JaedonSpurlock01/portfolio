import React from "react";
import { Blog } from "@/types/blog";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BlogInfo({
  blog: { metadata, readingTime },
  className,
}: {
  blog: Blog;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <h1 className="text-2xl font-medium">{String(metadata.title)}</h1>
      <div className="flex justify-between items-center text-sm">
        <div className="flex gap-2 items-center text-secondary">
          <span>{metadata.date}</span>·<span>{readingTime}</span>
        </div>
        <Link href="#blog-comments">
          <MessageCircle className="hover:text-primary/70 transition-colors" />
        </Link>
      </div>
    </div>
  );
}
