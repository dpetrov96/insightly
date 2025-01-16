"use client";

import Box from "./Box";
import { useMood } from "./MoodProvider";

export default function MoodAnalysis() {
  const { moods } = useMood();

  const recentMoods = moods
    .slice(-3)
    .map((mood: { moodScore: number }) => mood.moodScore);
  const increasing = recentMoods.every(
    (score, i, arr) => i === 0 || score >= arr[i - 1]
  );
  const decreasing = recentMoods.every(
    (score, i, arr) => i === 0 || score <= arr[i - 1]
  );

  let message = "Your mood has been varying lately. Try finding balance! ⚖️";
  if (increasing)
    message = "Your mood has been improving over the past few days! 😊📈";
  if (decreasing)
    message = "It seems like you've been feeling a bit down. Hang in there! 💙🌧️";

  return (
    <Box title="Mood Analysis">
      <p className="text-lg">{message}</p>
    </Box>
  );
}
