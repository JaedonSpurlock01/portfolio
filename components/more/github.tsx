import React from "react";
import { Card } from "../ui/card";
import { Box, GitCommit, Heart, Star } from "lucide-react";
import { GitHubButton } from "../social-buttons";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Github() {
  return (
    <div className="max-content-width overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="flex gap-2 items-center text-primary">GitHub</span>

        <span className="flex gap-2 items-center text-primary">
          <p className="text-sm text-secondary">Follow me</p>
          <GitHubButton />
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          <div>
            <span className="flex gap-2 items-center mb-2 text-primary">
              <Star size={16} />
              <p>Stars</p>
            </span>
            <p className="text-secondary">23</p>
          </div>

          <div>
            <span className="flex gap-2 items-center mb-2 text-primary">
              <Box size={16} />
              <p>Repositories</p>
            </span>
            <p className="text-secondary">22</p>
          </div>

          <div>
            <span className="flex gap-2 items-center mb-2 text-primary">
              <GitCommit size={16} />
              <p>Commits</p>
            </span>
            <p className="text-secondary">1092</p>
          </div>

          <div>
            <span className="flex gap-2 items-center mb-2 text-primary">
              <Heart size={16} />
              <p>Followers</p>
            </span>

            <div className="flex -space-x-2">
              <Image
                className="rounded-full ring-2 ring-background"
                src="https://avatar.iran.liara.run/public"
                width={25}
                height={25}
                alt="Avatar 01"
              />
              <Image
                className="rounded-full ring-2 ring-background"
                src="https://avatar.iran.liara.run/public"
                width={25}
                height={25}
                alt="Avatar 02"
              />
              <Image
                className="rounded-full ring-2 ring-background"
                src="https://avatar.iran.liara.run/public"
                width={25}
                height={25}
                alt="Avatar 03"
              />
              <Image
                className="rounded-full ring-2 ring-background"
                src="https://avatar.iran.liara.run/public"
                width={25}
                height={25}
                alt="Avatar 04"
              />
              <Image
                className="rounded-full ring-2 ring-background"
                src="https://avatar.iran.liara.run/public"
                width={25}
                height={25}
                alt="Avatar 05"
              />
              <Image
                className="rounded-full ring-2 ring-background"
                src="https://avatar.iran.liara.run/public"
                width={25}
                height={25}
                alt="Avatar 06"
              />
              <Button
                variant="secondary"
                className="flex size-[25px] items-center justify-center rounded-full bg-primary-foreground text-xs text-muted-foreground ring-2 ring-background hover:bg-secondary hover:text-foreground"
                size="icon"
              >
                + 243
              </Button>
            </div>
          </div>
        </div>

        <Card className="mt-4 bg-primary-foreground col-span-2 h-60 rounded-xl flex flex-col items-center justify-center">
          Commit heatmap
        </Card>
      </div>
    </div>
  );
}
