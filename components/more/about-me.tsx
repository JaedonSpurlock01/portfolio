"use client";

import { BookImage, Box, Calendar1, Music } from "lucide-react";
import React, { useEffect, useState } from "react";

export const AboutMe = () => {
  const birthDate = new Date("2004-03-31");
  const [age, setAge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - birthDate.getTime();
      const years = diff / (1000 * 60 * 60 * 24 * 365.25);
      setAge(Number(years.toFixed(9)));
    }, 100);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <span className="flex gap-2 items-center text-primary">
        <Box /> Hey There
      </span>
      <p className="mt-2 text-secondary leading-relaxed">
        I’m Jaedon Spurlock, a junior in Software Engineering student at CSUSM.
        Originally from a small town in Ohio, I moved to California in pursuit
        of a different life from the country. I was born with complete hearing
        loss and transitioned to cochlear implants, which has been a big part of
        my journey. Outside of work, I enjoy climbing, hiking, and spending time
        at the gym.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        <div>
          <span className="flex gap-2 items-center mb-2 text-primary">
            <Calendar1 size={16} />
            <p>Current Age</p>
          </span>
          <p className="text-secondary">{age}</p>
        </div>

        <div>
          <span className="flex gap-2 items-center mb-2 text-primary">
            <BookImage size={16} />
            <p>Occupation</p>
          </span>
          <p className="text-secondary">Software Engineer</p>
        </div>

        <div>
          <span className="flex gap-2 items-center mb-2 text-primary">
            <BookImage size={16} />
            <p>Located in</p>
          </span>
          <p className="text-secondary">Oceanside, CA</p>
        </div>

        <div>
          <span className="flex gap-2 items-center mb-2 text-primary">
            <Music size={16} />
            <p>Favorite Artist</p>
          </span>
          <p className="text-secondary">Thomas Bergersen</p>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <div className="flex flex-col col-span-1 gap-4">
          <BasicWeatherWidget />
          <Cochlear />
        </div>
        <div className="col-span-2 h-full">
          <HomeMap />
        </div>
      </div> */}
    </div>
  );
};
