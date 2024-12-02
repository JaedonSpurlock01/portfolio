"use client";

import React from "react";

import { Composer, Thread } from "@liveblocks/react-ui";
import { useThreads } from "@liveblocks/react";
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-ui/styles/dark/attributes.css";
import { BlogRoom } from "./room";

const Comments = ({ roomId }: { roomId: string }) => {
  return (
    <BlogRoom roomId={roomId}>
      <CommentsSection />
    </BlogRoom>
  );
};

const CommentsSection = () => {
  const { threads } = useThreads();

  return (
    <div className="max-content-width flex flex-col gap-2" id="blog-comments">
      <Composer className="border border-border rounded-lg" />

      {threads?.map((thread) => (
        <Thread
          key={thread.id}
          thread={thread}
          className="border border-border rounded-lg"
        />
      ))}
    </div>
  );
};

export default Comments;
