"use client";

import Box from "./Box";
import { useMood } from "./MoodProvider";

export default function MoodAnalysis() {
  const { increasing, decreasing } = useMood();

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
