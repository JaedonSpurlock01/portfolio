"use client";

import React, { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider } from "./ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const months = [
  {
    label: "Jan",
    colspan: 5,
  },
  {
    label: "Feb",
    colspan: 4,
  },
  {
    label: "Mar",
    colspan: 5,
  },
  {
    label: "Apr",
    colspan: 4,
  },
  {
    label: "May",
    colspan: 5,
  },
  {
    label: "Jun",
    colspan: 4,
  },
  {
    label: "Jul",
    colspan: 5,
  },
  {
    label: "Aug",
    colspan: 4,
  },
  {
    label: "Sep",
    colspan: 5,
  },
  {
    label: "Oct",
    colspan: 4,
  },
  {
    label: "Nov",
    colspan: 5,
  },
  {
    label: "Dec",
    colspan: 4,
  },
];

const days = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

const GitCommitHeatmap = ({
  year = new Date().getFullYear(),
  data = {},
}: {
  year?: number;
  data?: Record<string, number>;
}) => {
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);
  const firstDay = startDate.getDay();

  const getDayValue = (date: Date) => {
    const dateString = date.toISOString().split("T")[0];
    const randomColor = Math.floor(Math.random() * 8);
    return randomColor || 0;
  };

  const getColor = (value: number) => {
    if (value <= 4) return "bg-primary-foreground border border-border";
    if (value <= 5) return "bg-blue-800";
    if (value <= 6) return "bg-blue-700";
    if (value <= 7) return "bg-blue-500";
    if (value <= 8) return "bg-blue-300";
    return "bg-blue-100";
  };

  return (
    <div className="max-w-full flex flex-col items-end justify-center gap-4 mt-4">
      <table className="border-separate border-spacing-[2px]">
        <thead>
          <tr className="h-[13px]">
            <td className="w-[28px]" />
            {months.map((month, i) => (
              <td key={i} colSpan={month.colspan} className="relative text-xs">
                {month.label}
              </td>
            ))}
          </tr>
        </thead>

        <tbody>
          {Object.keys(days).map((dayIndex) => (
            <TableRow
              key={dayIndex}
              weekLabel={days[parseInt(dayIndex)]}
              skipFirst={parseInt(dayIndex) < firstDay}
              hideLabel={parseInt(dayIndex) % 2 === 0}
              dayIndex={parseInt(dayIndex)}
              startDate={startDate}
              endDate={endDate}
              getDayValue={getDayValue}
              getColor={getColor}
            />
          ))}
        </tbody>
      </table>

      {/* Legend */}
      <div className="flex items-center mb-4 justify-end text-xs">
        <span className="mr-2">More</span>
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded-sm bg-blue-300"></div>
          <div className="w-3 h-3 rounded-sm bg-blue-400"></div>
          <div className="w-3 h-3 rounded-sm bg-blue-500"></div>
          <div className="w-3 h-3 rounded-sm bg-blue-700"></div>
          <div className="w-3 h-3 rounded-sm bg-blue-800"></div>
          <div className="w-3 h-3 rounded-sm bg-primary-foreground border border-border"></div>
        </div>
        <span className="ml-2">Less</span>
      </div>
    </div>
  );
};

export default GitCommitHeatmap;

const TableRow = ({
  weekLabel,
  dayIndex,
  hideLabel,
  startDate,
  endDate,
  skipFirst,
  getDayValue,
  getColor,
}: {
  weekLabel: string;
  skipFirst?: boolean;
  hideLabel?: boolean;
  dayIndex: number;
  startDate: Date;
  endDate: Date;
  getDayValue: (date: Date) => number;
  getColor: (value: number) => string;
}) => {
  const cells: JSX.Element[] = [];
  let currentDate = new Date(startDate);

  if (skipFirst) {
    cells.push(
      <td key={`empty-${currentDate.toISOString()}`} className="w-3 h-3" />
    );
    currentDate.setDate(currentDate.getDate() + 1);
  }

  while (currentDate.getDay() !== dayIndex) {
    currentDate.setDate(currentDate.getDate() + 1);
  }

  while (currentDate <= endDate) {
    cells.push(
      <TooltipProvider key={currentDate.toISOString()} delayDuration={50}>
        <Tooltip>
          <TooltipTrigger asChild>
            <td
              key={currentDate.toISOString()}
              className={cn(
                "w-3 h-3 min-w-3 rounded-[2px]",
                getColor(getDayValue(currentDate))
              )}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p># commits on {currentDate.toDateString()}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    currentDate.setDate(currentDate.getDate() + 7);
  }

  return (
    <tr className="h-[10px]">
      <td className="relative">
        <span className="absolute -bottom-[3px] text-xs text-secondary">
          {!hideLabel && weekLabel}
        </span>
      </td>
      {cells}
    </tr>
  );
};
