"use client";
import React, { useEffect, useState } from "react";

const NUM_COLUMNS = 6;
const COLUMN_WIDTH = 32; // px
const MIN_LENGTH = 8;
const MAX_LENGTH = 18;

// position presets in % of container width
const COLUMN_PRESETS = [
  [10, 25, 40, 60, 75, 90],
  [5, 20, 35, 55, 70, 85],
  [15, 30, 50, 65, 80, 95],
  [8, 28, 48, 68, 78, 88],
  [12, 32, 52, 72, 82, 92],
];

function getRandomBinaryString(length: number) {
  return Array.from({ length }, () =>
    Math.random() > 0.5 ? "1" : "0"
  ).join("\n");
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface Column {
  str: string;
  delay: number;
  duration: number;
  endOffset: number; // how many extra px below the fold
}

export default function BinaryRain() {
  const [columns, setColumns] = useState<Column[]>([]);
  const [positions, setPositions] = useState<number[]>(COLUMN_PRESETS[0]);

  useEffect(() => {
    // generate each column’s data
    const cols: Column[] = Array.from({ length: NUM_COLUMNS }, () => ({
      str: getRandomBinaryString(getRandomInt(MIN_LENGTH, MAX_LENGTH)),
      delay: Math.random() * 2,             // up to 2s stagger
      duration: getRandomFloat(4.5, 7),     // 4.5–7s fall
      endOffset: getRandomInt(0, 200),      // extra drop past bottom
    }));

    setColumns(cols);
    setPositions(
      COLUMN_PRESETS[getRandomInt(0, COLUMN_PRESETS.length - 1)]
    );
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 w-full h-full overflow-hidden">
      {/* build one @keyframes block per column */}
      <style>
        {columns
          .map(
            (col, i) => `
        @keyframes binary-fall-${i} {
          0%   { transform: translateY(-100%); opacity: 0.2; }
          10%, 90% { opacity: 0.4; }
          100% { transform: translateY(calc(100vh + ${col.endOffset}px)); opacity: 0.2; }
        }
      `
          )
          .join("\n")}
      </style>

      {columns.map((col, i) => (
        <span
          key={i}
          className="absolute text-xs sm:text-sm font-mono text-[#3bb0ff] select-none"
          style={{
            left: `calc(${positions[i]}% - ${COLUMN_WIDTH / 2}px)`,
            top: 0,
            whiteSpace: "pre",
            animationName: `binary-fall-${i}`,
            animationDuration: `${col.duration}s`,
            animationTimingFunction: "linear",
            animationDelay: `${col.delay}s`,
            animationIterationCount: "infinite",
            animationFillMode: "backwards", // ← hold the 0% frame (off‐screen) during the delay
          }}
        >
          {col.str}
        </span>
      ))}
    </div>
  );
}
