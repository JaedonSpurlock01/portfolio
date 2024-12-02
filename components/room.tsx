"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function VisitorRoom({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_E1--VyouGyBXgTcjElXvaMSY6svC0L6_06pf6UiQvTG12Otu109BN6rSWgaVUxH7"
      }
    >
      <RoomProvider id="visitor-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}

export function BlogRoom({
  children,
  roomId,
}: {
  children: ReactNode;
  roomId: string;
}) {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_E1--VyouGyBXgTcjElXvaMSY6svC0L6_06pf6UiQvTG12Otu109BN6rSWgaVUxH7"
      }
    >
      <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
