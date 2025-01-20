"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

import Box from "./Box";
import { useMood } from "./MoodProvider";

export default function MoodTrends() {
  const { moods } = useMood();

  const data = {
    labels: moods?.map((mood) => mood.date),
    datasets: [
      {
        label: "Mood Score",
        data: moods?.map((mood) => mood.moodScore),
        borderColor: "blue",
        backgroundColor: "lightblue",
      },
    ],
  };

  return (
    <Box title="Mood Trends">
      <Line data={data} />
    </Box>
  );
}
