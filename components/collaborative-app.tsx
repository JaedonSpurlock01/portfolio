"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Blocks, MapPin } from "lucide-react";
import { MapContainer, CircleMarker, LayerGroup } from "react-leaflet";
import proj4 from "proj4";
import DottedMap from "dotted-map/without-countries";
import mapJson from "@/data/map.json";
import "leaflet/dist/leaflet.css";
import PulsatingDot from "./ui/pulsating-dot";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from "./ui/dialog";

import { Composer, Thread } from "@liveblocks/react-ui";
import { useOthers } from "@liveblocks/react/suspense";
import { useThreads } from "@liveblocks/react";
import { BaseMetadata, ThreadData } from "@liveblocks/client";
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-ui/styles/dark/attributes.css";
import { useTheme } from "next-themes";

// 0 = light -> 4 = dark green
const darkThemeColors = ["#424242", "#93E7A2", "#3EBE5E", "#2F984A", "#216435"];
const lightThemeColors = [
  "#a8a8a8",
  "#93E7A2",
  "#3EBE5E",
  "#2F984A",
  "#216435",
];

export function CollaborativeApp() {
  const { points } = useMemo(() => {
    // @ts-expect-error No need to check
    const map = new DottedMap({ map: mapJson });

    // Convert raw points to lat-lng using getPin
    const pointsWithCoordinates = map.getPoints().map((point) => {
      const { x, y } = point;
      const [localLng, localLat] = proj4(
        proj4.defs("GOOGLE"),
        proj4.defs("WGS84"),
        [
          (x * mapJson.X_RANGE) / mapJson.width + mapJson.X_MIN,
          mapJson.Y_MAX - (y * mapJson.Y_RANGE) / mapJson.height,
        ]
      );

      return { ...point, lat: localLat, lng: localLng };
    });

    return { points: pointsWithCoordinates };
  }, []);

  const others = useOthers();
  const otherUsers = others.length;
  const { threads } = useThreads();
  const { theme } = useTheme();

  const [mapMode, setMapMode] = useState(true);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipCoords, setTooltipCoords] = useState({ top: 0, left: 0 });

  const [selectedCoords, setSelectedCoords] = useState({ lat: 0, lng: 0 });
  const [dialogOpen, setDialogOpen] = useState(false);

  const [currentThread, setCurrentThread] =
    useState<ThreadData<BaseMetadata> | null>(null);

  useEffect(() => {
    if (!selectedCoords.lat || !selectedCoords.lng || !threads) return;

    setCurrentThread(
      getThread(selectedCoords.lat, selectedCoords.lng, threads)
    );
  }, [selectedCoords, threads]);

  const getColor = (lat, lng, currentThreads) => {
    const thread = getThread(lat, lng, currentThreads);
    const colors = theme === "dark" ? darkThemeColors : lightThemeColors;
    if (!thread) return colors[0];

    const count = thread.comments.length;
    if (count === 0) return colors[0];
    if (count === 1) return colors[1];
    if (count === 2) return colors[2];
    if (count === 3) return colors[3];
    return colors[4];
  };

  const getThread = (lat: number, lng: number, currentThreads) => {
    if (!lat || !lng || !currentThreads) return null;
    return (
      currentThreads.find(
        (thread: ThreadData<BaseMetadata>) =>
          thread.metadata.lat === lat.toFixed(2) &&
          thread.metadata.lng === lng.toFixed(2)
      ) || null
    );
  };

  const markers = useMemo(() => {
    return points.map((point) => (
      <CircleMarker
        center={[point.lat, point.lng]}
        key={`${point.lat}-${point.lng}`}
        radius={3}
        pathOptions={{
          fillColor: getColor(point.lat, point.lng, threads),
          color: "transparent",
          fillOpacity: 1,
        }}
        eventHandlers={{
          mouseover: (e) => {
            setTooltipCoords({
              top: e.originalEvent.clientY,
              left: e.originalEvent.clientX,
            });
            setIsTooltipVisible(true);
          },
          mouseout: () => {
            setIsTooltipVisible(false);
          },
          click: (e) => {
            setSelectedCoords({
              lat: e.latlng.lat,
              lng: e.latlng.lng,
            });
            setDialogOpen(true);
          },
        }}
      />
    ));
  }, [points, threads]);

  return (
    <div className="max-content-width border border-border rounded-lg bg-primary-foreground relative">
      <div className="flex items-center justify-between py-2 px-4 w-full">
        <Button variant="outline" onClick={() => setMapMode(!mapMode)}>
          {mapMode ? <Blocks /> : <MapPin />}
        </Button>
        {/* <Button variant="outline" className="px-12">
          <UserRoundPlus />
          Leave a note
        </Button> */}
        <span className="flex items-center gap-2 text-secondary text-sm">
          <PulsatingDot
            className="w-3 h-3"
            coreDotClassName="inset-[7%] bg-green-500"
            outerDotClassName="bg-green-500"
          />
          <p>{otherUsers + 1}</p>
        </span>
      </div>

      {mapMode && (
        <>
          <MapContainer
            center={[0, 0]}
            style={{
              height: "600px",
              width: "100%",
              background: theme === "dark" ? "#020300" : "	#f5f5f5",
            }}
            zoom={2}
            maxZoom={3}
            minZoom={2}
            attributionControl={false}
            zoomControl={false}
            // maxBoundsViscosity={0.2}
            // maxBounds={bounds}
            doubleClickZoom={false}
          >
            <LayerGroup>{markers}</LayerGroup>
          </MapContainer>
        </>
      )}

      {isTooltipVisible && (
        <div
          className="fixed z-[100000] text-white ml-4 pl-4 border-l-2 border-white pointer-events-none transition-opacity duration-200"
          style={{
            top: `${tooltipCoords.top}px`,
            left: `${tooltipCoords.left}px`,
          }}
        >
          <b>
            {tooltipCoords.left}, {tooltipCoords.top}
          </b>
        </div>
      )}

      {dialogOpen && (
        <Dialog onOpenChange={setDialogOpen} open={dialogOpen} modal={false}>
          <DialogContent className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <DialogTitle>Coordinates</DialogTitle>
            <DialogDescription className="flex flex-col gap-4">
              <p className="text-sm text-secondary">
                {selectedCoords.lat}, {selectedCoords.lng}
              </p>
            </DialogDescription>
            <div className="flex flex-col gap-4 p-1 m-auto w-full min-w-full">
              {currentThread ? (
                <Thread
                  id={currentThread?.id}
                  thread={currentThread}
                  className="relative flex-none border border-border rounded-lg overflow-hidden bg-primary-foreground"
                />
              ) : (
                <Composer
                  metadata={{
                    lat: selectedCoords.lat.toFixed(2),
                    lng: selectedCoords.lng.toFixed(2),
                  }}
                  className="relative flex-none border border-border rounded-lg overflow-hidden bg-primary-foreground"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}

      {!mapMode && (
        <div>
          {threads?.map((thread) => (
            <>
              <div>
                <p className="text-sm text-secondary">
                  From {thread.metadata.lat}, {thread.metadata.lng}
                </p>
              </div>
              <Thread
                key={thread.id}
                id={thread.id}
                thread={thread}
                className="relative flex-none border border-border rounded-lg overflow-hidden bg-primary-foreground"
              />
            </>
          ))}
        </div>
      )}
    </div>
  );
}
