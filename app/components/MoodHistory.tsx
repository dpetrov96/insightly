"use client";

import React from "react";
import { MOOD_SCORE } from "../utils/moodScore";
import Box from "./Box";
import { useMood } from "./MoodProvider";

export default function MoodHistory() {
  const { moods } = useMood();

  return (
    <Box title="Mood History">
      {moods.length === 0 ? (
        <p className="text-gray-500 text-sm">No mood history available.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {moods.map((mood, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="bg-gray-100 text-sm text-gray-600 py-1 px-2 rounded-md">{mood.date}</span>
              {MOOD_SCORE[mood.moodScore as keyof typeof MOOD_SCORE]}
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
}