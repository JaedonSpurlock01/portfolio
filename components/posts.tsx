import { getAllBlogs } from "@/lib/get-blogs";
import { Book } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function Posts({
  getLatestBlogs = false,
}: {
  getLatestBlogs?: boolean;
}) {
  let blogs = await getAllBlogs();

  if (getLatestBlogs) {
    blogs.sort((a, b) => {
      const dateA = new Date(String(a.metadata.date)).getTime();
      const dateB = new Date(String(b.metadata.date)).getTime();
      return dateB - dateA;
    });
    blogs = blogs.slice(0, 3);
  }

  return (
    <div className="max-content-width">
      <span className="flex gap-2 items-center text-primary">
        <Book /> My blog
      </span>

      {blogs.map((blog) => {
        const { metadata } = blog;
        const title = String(metadata.title);
        const date = String(metadata.date);

        return (
          <a
            // Not using next component since layout is not re-rendering
            key={title}
            href={"/blog/" + blog.slug}
            className="flex flex-col overflow-hidden"
          >
            <div className="flex flex-col gap-2 mt-4 border-l-4 pl-4 hover:border-primary transition-colors">
              <p>{title}</p>
              <p className="text-secondary text-sm">{date}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
