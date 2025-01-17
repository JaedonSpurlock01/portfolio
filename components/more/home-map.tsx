"use client";

import React, { useRef } from "react";
import Map, { Marker, MapRef } from "react-map-gl";
import { useTheme } from "next-themes";
import PulsatingDot from "../ui/pulsating-dot";
import Clock from "../ui/clock";

export const HomeMap = () => {
  const { theme } = useTheme();
  const mapRef = useRef<MapRef>();

  return (
    <div className="relative overflow-hidden h-full rounded-lg">
      <Map
        initialViewState={{
          latitude: 33.20330913063883,
          longitude: -117.3873015907678,
          zoom: 12.5,
        }}
        ref={mapRef as React.LegacyRef<MapRef> | undefined}
        mapStyle={
          theme === "dark"
            ? "mapbox://styles/mapbox/dark-v11"
            : "mapbox://styles/mapbox/light-v11"
        }
        style={{ width: "100%", height: "100%" }}
        scrollZoom={false}
        doubleClickZoom={false}
        mapboxAccessToken="pk.eyJ1IjoiamFlZG9uMDEiLCJhIjoiY20zdXY4em95MG12bTJtb2VuNDE2NnE3YiJ9.INFgoseS-jxCVH6BjEM8Mw"
      >
        <Marker
          latitude={33.20330913063883}
          longitude={-117.3873015907678}
          anchor="center"
        >
          <PulsatingDot
            className="w-6 h-6"
            coreDotClassName="inset-1/4 bg-blue-500"
            outerDotClassName="bg-blue-500"
          />
        </Marker>
      </Map>

      {/* CLOCK */}
      <Clock className="absolute top-4 right-4 bg-primary-foreground text-secondary" />

      {/* LINK */}
    </div>
  );
};
