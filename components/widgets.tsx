"use client";

import { AudioLines, BookOpenText, Pause } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import StaggerContainer from "./ui/stagger-container";
import { SkipBack, Play, SkipForward } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const book = {
  title: "Engineering In Plain Sight",
  author: "Grady Hillhouse",
  image: "/book.jpg",
  currentPage: 142,
  totalPages: 512,
};

const audio = {
  title: "Link",
  author: "Jim Yosef",
  duration: "3:44",
  audio: "/song.mp3",
};

export default function Widgets() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [percent, setPercent] = useState(0);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const convertToTimeString = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  useEffect(() => {
    const ref = audioRef.current;

    if (ref) {
      ref.addEventListener("timeupdate", () => {
        setPercent(ref.currentTime / ref.duration);
      });
    }

    return () => {
      if (ref) {
        ref.removeEventListener("timeupdate", () => {});
      }
    };
  }, [audioRef]);

  return (
    <div className="w-full">
      <StaggerContainer delay={0.3} childDelay={0.2}>
        <div className="flex gap-20 flex-col md:flex-row md:gap-4">
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
                    <h2 className="font-semibold text-primary overflow-ellipsis line-clamp-1">
                      {book.title}
                    </h2>
                    <p className="text-secondary text-sm">{book.author}</p>

                    <div className="mt-4">
                      <div className="relative w-full h-1 bg-primary/10 rounded">
                        <div className="absolute h-full w-[35%] bg-primary rounded"></div>
                      </div>
                      <p className="flex justify-between mt-1 text-xs text-secondary">
                        Page {book.currentPage} of {book.totalPages}
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
                      src="music.png"
                      alt="Album art"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-semibold text-primary">
                      {audio.title}
                    </h2>
                    <p className="text-secondary text-sm">{audio.author}</p>
                  </div>
                  <div className="text-secondary">•••••••</div>
                </div>

                <div className="mt-4">
                  <div className="relative w-full h-1 bg-primary/10 rounded">
                    <div
                      className={cn("absolute h-full bg-primary rounded")}
                      style={{ width: `${percent * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-400">
                    <span>
                      {convertToTimeString(audioRef.current?.currentTime || 0)}
                    </span>
                    <span>{audio.duration}</span>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-8">
                  <button className="text-secondary hover:text-primary transition">
                    <SkipBack size={20} />
                  </button>
                  <button
                    onClick={toggleAudio}
                    className="text-secondary hover:text-primary transition"
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                  <button className="text-secondary hover:text-primary transition">
                    <SkipForward size={20} />
                  </button>
                </div>

                <audio src={audio.audio} ref={audioRef} className="hidden" />
              </CardContent>
            </Card>
          </div>
        </div>
      </StaggerContainer>
    </div>
  );
}
