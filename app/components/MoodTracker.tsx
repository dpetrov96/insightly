"use client";

import React from "react";
import { MOOD_SCORE } from "../utils/moodScore";
import Box from "./Box";
import { useMood } from "./MoodProvider";

export default function MoodTracker() {
  const { addMood } = useMood();

  return (
    <Box title="Track Your Mood">
      <div className="flex gap-2">
        {Object.entries(MOOD_SCORE).map(([score, label]) => (
          <button
            className="py-2 px-4 border border-gray-200 rounded-md hover:bg-gray-100 transition"
            key={score}
            onClick={() => addMood(Number(score))}
          >
            {label}
          </button>
        ))}
      </div>
    </Box>
  );
}
