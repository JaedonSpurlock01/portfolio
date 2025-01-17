import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer } from "lucide-react";

const ReactionGame = () => {
  const [gameState, setGameState] = useState("waiting"); // waiting, ready, clicking
  const [results, setResults] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const timeoutRef = useRef(null);

  const startGame = () => {
    setGameState("ready");
    // Random delay between 1-5 seconds
    const delay = 1000 + Math.random() * 4000;
    timeoutRef.current = setTimeout(() => {
      setStartTime(Date.now());
      setGameState("clicking");
    }, delay);
  };

  const handleClick = () => {
    if (gameState === "clicking") {
      const reactionTime = Date.now() - startTime;
      setResults((prev) => [...prev, reactionTime]);
      setGameState("waiting");
    } else if (gameState === "ready") {
      // Clicked too early
      clearTimeout(timeoutRef.current);
      setResults((prev) => [...prev, -1]);
      setGameState("waiting");
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const getAverageTime = () => {
    const validTimes = results.filter((time) => time > 0);
    if (validTimes.length === 0) return 0;
    return Math.round(
      validTimes.reduce((a, b) => a + b, 0) / validTimes.length
    );
  };

  const getBestTime = () => {
    const validTimes = results.filter((time) => time > 0);
    if (validTimes.length === 0) return 0;
    return Math.min(...validTimes);
  };

  const getBackgroundColor = () => {
    switch (gameState) {
      case "waiting":
        return "bg-gray-200";
      case "ready":
        return "bg-red-500";
      case "clicking":
        return "bg-green-500";
      default:
        return "bg-gray-200";
    }
  };

  const getMessage = () => {
    switch (gameState) {
      case "waiting":
        return "Click to start";
      case "ready":
        return "Wait for green...";
      case "clicking":
        return "Click now!";
      default:
        return "Click to start";
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Timer className="w-6 h-6" />
          Reaction Speed Test
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div
          onClick={gameState === "waiting" ? startGame : handleClick}
          className={`${getBackgroundColor()} cursor-pointer rounded-lg p-8 text-center transition-colors duration-150 hover:opacity-90`}
        >
          <p className="text-lg font-medium text-white">{getMessage()}</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Last attempt:</span>
            <span>
              {results.length > 0
                ? results[results.length - 1] === -1
                  ? "Too early!"
                  : `${results[results.length - 1]}ms`
                : "-"}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Best time:</span>
            <span>{getBestTime() > 0 ? `${getBestTime()}ms` : "-"}</span>
          </div>
          <div className="flex justify-between">
            <span>Average time:</span>
            <span>{getAverageTime() > 0 ? `${getAverageTime()}ms` : "-"}</span>
          </div>
        </div>

        {results.length > 0 && (
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setResults([])}
          >
            Reset Stats
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ReactionGame;
