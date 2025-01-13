"use client";

import { useQuery } from "@tanstack/react-query";

import { Mood } from "@/app/types";

export default function MoodAnalysis() {
  const { data: moods } = useQuery<Mood[]>({ queryKey: ["moods"], queryFn: () => [] });

  if (!moods) return <div>Loading...</div>;

  const recentMoods = moods
    .slice(-3)
    .map((mood: { moodScore: number }) => mood.moodScore);
  const increasing = recentMoods.every(
    (score, i, arr) => i === 0 || score >= arr[i - 1]
  );
  const decreasing = recentMoods.every(
    (score, i, arr) => i === 0 || score <= arr[i - 1]
  );

  let message = "Your mood has been varying lately. Try finding balance!";
  if (increasing)
    message = "Your mood has been improving over the past few days!";
  if (decreasing)
    message = "It seems like you've been feeling a bit down. Hang in there!";

  return <p>{message}</p>;
}
