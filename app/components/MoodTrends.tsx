"use client";

import { useQuery } from "@tanstack/react-query";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

import { fetchMoods } from "@/app/utils/fetchMoods";
import { Mood } from "@/app/types";
import { QUERY_KEYS } from "@/app/utils/queryKeys";
import Box from "./Box";

export default function MoodTrends() {
  const { data: moodsData, isLoading } = useQuery<Mood[]>({
    queryKey: [QUERY_KEYS.MOODS],
    queryFn: fetchMoods,
  });

  const moods = moodsData || [];

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
    <Box isLoading={isLoading} title="Mood Trends">
      <Line data={data} />
    </Box>
  );
}
