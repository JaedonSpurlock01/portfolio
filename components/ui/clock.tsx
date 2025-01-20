import React, { useState, useEffect } from "react";
import { format, toZonedTime } from "date-fns-tz";
import { Badge } from "./badge";
import { Clock10 } from "lucide-react";

function Clock({ className }: { className?: string }) {
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    const timeZone = "America/Los_Angeles"; // PST timezone

    // Set initial time after mount to avoid SSR mismatch
    const updateTime = () => {
      const now = new Date();
      const zonedTime = toZonedTime(now, timeZone);
      setCurrentTime(format(zonedTime, "hh:mm:ss a"));
    };

    updateTime(); // Set initial time
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (currentTime === null) {
    // Return empty content during SSR to prevent mismatch
    return null;
  }

  return (
    <Badge className={className}>
      <Clock10 size={14} className="mr-1" /> {currentTime} PST
    </Badge>
  );
}

export default Clock;
