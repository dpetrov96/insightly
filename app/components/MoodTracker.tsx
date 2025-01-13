"use client";

import { useState } from "react";

export default function MoodTracker() {
  const [moods, setMoods] = useState<{ date: string; moodScore: number }[]>([]);

  const addMood = (moodScore: number) => {
    const today = new Date().toISOString().split("T")[0];
    setMoods([...moods, { date: today, moodScore }]);
  };

  return (
    <div>
      <h2>Track Your Mood</h2>
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
    </div>
  );
}
