import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export default function Hiking() {
  return (
    <div>
      <div className="flex gap-4 -my-4">
        <span className="text-center text-secondary hover:text-primary transition-all hover:bg-primary-foreground hover:border-border border border-background p-2 rounded-lg">
          <p>14</p>
          <p className="text-xs">JUN</p>
        </span>
        <span className="text-center text-secondary hover:text-primary transition-all hover:bg-primary-foreground hover:border-border border border-background p-2 rounded-lg">
          <p>17</p>
          <p className="text-xs">JUN</p>
        </span>
        <span className="text-center text-secondary hover:text-primary transition-all hover:bg-primary-foreground hover:border-border border border-background p-2 rounded-lg">
          <p>18</p>
          <p className="text-xs ">JUN</p>
        </span>
        <span className="text-center text-primary bg-primary-foreground border-border border p-2 rounded-lg">
          <p>19</p>
          <p className="text-xs">JUN</p>
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <Card className="bg-primary-foreground col-span-1 rounded-xl">
          Images
        </Card>
        <div className="col-span-1">
          <p className="text-xl">Mount Rainier Summit Trail</p>
          <p className="text-secondary">
            A challenging ascent through alpine meadows to the iconic peak
          </p>

          <span className="flex gap-2 items-center mt-2">
            <p>Difficulty:</p>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
              Moderate
            </span>
          </span>

          <span className="flex gap-2 items-center">
            <p>Distance:</p>
            <p className="text-secondary">14.4 miles</p>
          </span>

          <span className="flex gap-2 items-center">
            <p>Duration:</p>
            <p className="text-secondary">2hr 30m</p>
          </span>

          <span className="flex gap-2 items-center">
            <p>Elevation:</p>
            <p className="text-secondary">4,400ft</p>
          </span>

          <Button className="mt-4">View Route</Button>
        </div>
      </div>
    </div>
  );
}
