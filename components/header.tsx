"use client";

import { info } from "@/data/data";
import React from "react";
import Map, { Marker } from "react-map-gl";
import { useTheme } from "next-themes";
import PulsatingDot from "./ui/pulsating-dot";
import AvatarImage from "./ui/avatar-image";
import {
  ContactButton,
  GitHubButton,
  LinkedInButton,
  ResumeButton,
} from "./social-buttons";

export default function Header() {
  const { theme } = useTheme();

  return (
    <div className="max-content-width flex flex-col gap-10">
      <div className="overflow-hidden rounded-lg translate-y-20">
        <Map
          mapLib={import("mapbox-gl")}
          initialViewState={{
            latitude: 33.20330913063883,
            longitude: -117.3873015907678,
            zoom: 12.5,
          }}
          style={{ width: "100%", height: 250 }}
          mapStyle={
            theme === "dark"
              ? "mapbox://styles/mapbox/dark-v11"
              : "mapbox://styles/mapbox/light-v11"
          }
          scrollZoom={false}
          doubleClickZoom={false}
          mapboxAccessToken="pk.eyJ1IjoiamFlZG9uMDEiLCJhIjoiY20zdXY4em95MG12bTJtb2VuNDE2NnE3YiJ9.INFgoseS-jxCVH6BjEM8Mw"
        >
          <Marker
            latitude={33.20330913063883}
            longitude={-117.3873015907678}
            anchor="center"
          >
            <PulsatingDot />
          </Marker>
        </Map>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>
      <div className="flex gap-4 z-10 items-center">
        <AvatarImage />
        <div>
          <h1 className="text-3xl text-primary">{info.name}</h1>
          <p className="text-lg text-secondary">{info.role}</p>
        </div>
      </div>

      <div className="flex gap-6 text-secondary">
        <LinkedInButton />
        <GitHubButton />
        <ContactButton />
        <ResumeButton />
      </div>

      <div>
        <p className="text-balance">{info.about}</p>
      </div>
    </div>
  );
}
