import { AudioLines, Book, BookOpenText } from "lucide-react";
import React from "react";
import StaggerContainer from "./ui/stagger-container";
import { SkipBack, Play, SkipForward } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default async function Widgets() {
  return (
    <div className="w-full">
      <StaggerContainer delay={0.3} childDelay={0.2}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 w-full">
            <span className="flex gap-2 items-center text-primary">
              <BookOpenText /> Reading
            </span>
            <Card className="bg-primary-foreground text-white rounded-xl p-4 h-40">
              <CardContent className="h-full">
                <div className="flex items-center gap-3 h-28 mt-2">
                  <div className="w-20 h-full rounded-lg bg-blue-900 overflow-hidden">
                    <img
                      src="/book.jpg"
                      alt="Album art"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-semibold overflow-ellipsis line-clamp-1">
                      Engineering In Plain Sight
                    </h2>
                    <p className="text-secondary text-sm">Grady Hillhouse</p>

                    <div className="mt-4">
                      <div className="relative w-full h-1 bg-gray-800 rounded">
                        <div className="absolute h-full w-[35%] bg-white rounded"></div>
                      </div>
                      <p className="flex justify-between mt-1 text-xs text-secondary">
                        Page 142 of 512
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <span className="flex gap-2 items-center text-primary">
              <AudioLines /> Listening
            </span>
            <Card className="bg-primary-foreground text-white rounded-xl p-4 h-40">
              <CardContent>
                <div className="flex items-center space-x-3 mt-2">
                  <div className="w-12 h-12 rounded-lg bg-blue-900 overflow-hidden">
                    <img
                      src="music.jpeg"
                      alt="Album art"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-semibold">Hope</h2>
                    <p className="text-secondary text-sm">Roar</p>
                  </div>
                  <div className="text-secondary">•••••••</div>
                </div>

                <div className="mt-4">
                  <div className="relative w-full h-1 bg-gray-800 rounded">
                    <div className="absolute h-full w-[3%] bg-white rounded"></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-400">
                    <span>00:06</span>
                    <span>3:34</span>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-8">
                  <button className="text-primary hover:text-gray-300 transition">
                    <SkipBack size={20} stroke="white" />
                  </button>
                  <button className="text-primary hover:text-gray-300 transition">
                    <Play size={20} stroke="white" />
                  </button>
                  <button className="text-primary hover:text-gray-300 transition">
                    <SkipForward size={20} stroke="white" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </StaggerContainer>
    </div>
  );
}
