"use client";

import { useState } from "react";

import { Mood } from "@/app/types";
import Box from "./Box";

export default function MoodTracker() {
  const [moods, setMoods] = useState<Mood[]>([]);

  const addMood = (moodScore: number) => {
    const today = new Date().toISOString().split("T")[0];
    setMoods([...moods, { date: today, moodScore }]);
  };

  return (
    <Box title="Track Your Mood">
      <button onClick={() => addMood(3)}>😊 Happy</button>
      <button onClick={() => addMood(2)}>😐 Neutral</button>
      <button onClick={() => addMood(1)}>☹️ Sad</button>
      <h3>Mood History:</h3>
      <ul>
        {moods.map((mood, index) => (
          <li key={index}>
            {mood.date}: {mood.moodScore}
          </li>
        ))}
      </ul>
    </Box>
  );
}
