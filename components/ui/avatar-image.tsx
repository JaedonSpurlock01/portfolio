import Image from "next/image";
import React from "react";

const AvatarImage = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer container with shadow */}
      <div className="relative overflow-hidden rounded-full shadow-lg">
        {/* Outer rotating highlight */}
        <div
          className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 
          before:absolute before:top-1/2 before:left-1/2 before:w-20 before:h-20 before:-translate-x-1/2 
          before:-translate-y-1/2 before:rotate-45 before:bg-gradient-to-r before:from-transparent 
          before:via-white before:to-transparent before:blur-2xl before:animate-spin-slow before:duration-3000 
          before:ease-[cubic-bezier(0.65,0,0.35,1)]"
        />

        {/* Inner container */}
        <div className="relative w-20 h-20 rounded-full border border-neutral-800">
          {/* Inner rotating highlight */}
          <div
            className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 
            before:absolute before:top-1/2 before:left-1/2 before:w-24 before:h-24 before:-translate-x-1/2 
            before:-translate-y-1/2 before:rotate-45 before:bg-gradient-to-r before:from-transparent 
            before:via-white before:to-transparent before:animate-spin-slow before:duration-3000 
            before:ease-[cubic-bezier(0.65,0,0.35,1)]"
          />

          {/* Image container */}
          <div className="absolute inset-0 rounded-full bg-neutral-900 z-10">
            <Image
              src="/jaedon.jpg"
              alt="Jaedon Spurlock"
              className="w-full h-full rounded-full object-cover opacity-80 scale-95"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarImage;
