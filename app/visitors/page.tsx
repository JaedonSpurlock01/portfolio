"use client";

import { CollaborativeApp } from "@/components/collaborative-app";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { VisitorRoom as Room } from "@/components/room";
import DashedLine from "@/components/ui/dashed-line";

export default function Visitors() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] page-layout h-full justify-between">
      <div className="flex flex-col h-full items-center gap-8">
        <Navigation />
        <DashedLine orientation="horizontal" className="max-content-width" />

        <Room>
          <CollaborativeApp />
        </Room>
      </div>

      <Footer />
    </div>
  );
}
