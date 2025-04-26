import React from "react";
import { Title } from "./ui/title";

const hobbies = [
  {
    date: "Jan 2023 - Present",
    type: "Hiking",
    description:
      "I'm a big fan of hiking, I love to explore new trails and get out in nature. I've been to national parks such as the Bitterroot Forest, Grand Canyon, Grand Tetons, Scout Mountain, and more!",
  },
] as const;

export default function Photos() {
  return (
    <div className="max-content-width">
      <Title title="Photos" />

      <div className="flex flex-col gap-4 mt-4">
        {hobbies.map((item, index) => (
          <div key={index} className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <p className="text-muted-foreground text-sm">{item.date}</p>

            <div className="col-span-3">
              <p className="font-medium text-sm text-primary/90 underline">
                {item.type}
              </p>
              <p className="text-sm text-muted-foreground mt-1 leading-6">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <div className="grid gap-4">
          <div>
            <img
              className="h-[18rem] object-cover max-w-full rounded-lg"
              src="/gallery/10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/gallery/11.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[14rem] object-cover max-w-full rounded-lg"
              src="/gallery/12.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/gallery/7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[20rem] object-cover max-w-full rounded-lg"
              src="/gallery/8.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/gallery/9.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4 col-span-2 md:col-span-1">
          <div>
            <img
              className="h-[12rem] object-cover w-full max-w-full rounded-lg"
              src="/gallery/13.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/gallery/2.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/gallery/5.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
