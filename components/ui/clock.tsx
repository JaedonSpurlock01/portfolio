import React, { useState, useEffect } from "react";
import { Badge } from "./badge";

function Clock({ className }: { className?: string }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Badge className={className}>{currentTime.toLocaleTimeString()} PST</Badge>
  );
}

export default Clock;
