import Image from "next/image";
import React from "react";

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Left column with 3 square images */}
      <div className="col-span-3 grid grid-rows-2 gap-4">
        <div className="rounded-xl aspect-square overflow-hidden">
          <Image
            src="/gallery/1.png"
            alt="Gallery item 1"
            className="w-full h-full object-cover"
            width={200}
            height={200}
          />
        </div>
        <div className="rounded-xl aspect-square overflow-hidden">
          <Image
            src="/gallery/5.png"
            alt="Gallery item 2"
            className="w-full h-full object-cover"
            width={200}
            height={200}
          />
        </div>
      </div>

      {/* Center column with tall image */}
      <div className="col-span-3 rounded-xl overflow-hidden">
        <Image
          src="/gallery/4.png"
          alt="Gallery item 4"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      {/* Right column with two rectangular images */}
      <div className="col-span-6 grid gap-4">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/gallery/6.png"
            alt="Gallery item 6"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
