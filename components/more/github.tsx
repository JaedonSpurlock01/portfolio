"use client";

import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Box, GitCommit, Heart, Loader2, Star } from "lucide-react";
import { GitHubButton } from "../social-buttons";
import { Button } from "../ui/button";
import Image from "next/image";
import GitCommitHeatmap from "../heatmap";

const username = "jaedonspurlock01";

interface User {
  avatar_url: string;
  login: string;
}

export default function Github() {
  const [commits, setCommits] = useState(0);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState<User[]>([]);
  const [stars, setStars] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos`
        );

        if (!reposResponse.ok) {
          throw new Error(`GitHub API error: ${reposResponse.status}`);
        }

        const reposData = await reposResponse.json();
        setRepos(reposData);

        // Fetch followers
        const followersResponse = await fetch(
          `https://api.github.com/users/${username}/followers`
        );
        if (!followersResponse.ok) {
          throw new Error(`GitHub API error: ${followersResponse.status}`);
        }

        const followersData = await followersResponse.json();
        setFollowers(followersData);

        // Fetch starred repos
        let allStars = 0;
        for (const repo of reposData) {
          allStars += repo.stargazers_count;
        }
        setStars(allStars);

        // Fetch commit count from each repo
        let totalCommits = 0;
        for (const repo of reposData) {
          const commitsResponse = await fetch(
            `https://api.github.com/repos/${username}/${repo.name}/commits`
          );
          if (!commitsResponse.ok) {
            throw new Error(`GitHub API error: ${commitsResponse.status}`);
          }

          const commitsData = await commitsResponse.json();
          totalCommits += commitsData.length;
        }
        setCommits(totalCommits);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

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
            <p className="text-secondary">{stars}</p>
          </div>

          <div>
            <span className="flex gap-2 items-center mb-2 text-primary">
              <Box size={16} />
              <p>Repositories</p>
            </span>
            <p className="text-secondary">{repos.length}</p>
          </div>

          <div>
            <span className="flex gap-2 items-center mb-2 text-primary">
              <GitCommit size={16} />
              <p>Commits</p>
            </span>
            <p className="text-secondary">{commits}</p>
          </div>

          <div>
            <span className="flex gap-2 items-center mb-2 text-primary">
              <Heart size={16} />
              <p>Followers</p>
            </span>

            {loading ? (
              <Loader2 className="animate-spin text-primary/50" />
            ) : (
              <div className="flex -space-x-2">
                {followers.splice(0, 4).map((follower, index) => (
                  <Image
                    key={index}
                    src={follower.avatar_url}
                    alt={follower.login}
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                ))}

                {followers.length > 4 && (
                  <Button
                    variant="secondary"
                    className="flex size-[25px] items-center justify-center rounded-full bg-primary-foreground text-xs text-muted-foreground ring-2 ring-background hover:bg-secondary hover:text-foreground"
                    size="icon"
                  >
                    + {followers.length - 4}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        <GitCommitHeatmap />
      </div>
    </div>
  );
}
