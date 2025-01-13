"use client";

import { useQuery } from "@tanstack/react-query";
import { Mood, Task } from "../types";

export default function DailyInsightsSummary() {
  const { data: tasks } = useQuery<Task[]>({ queryKey: ["tasks"], queryFn: () => [] });
  const { data: moods } = useQuery<Mood[]>({ queryKey: ["moods"], queryFn: () => [] });

  if (!tasks || !moods) return <div>Loading...</div>;

  const moodScore =
    moods.reduce((sum: number, mood) => sum + mood.moodScore, 0) /
    moods.length;

  return (
    <div>
      <h2>Daily Insights</h2>
      <p>Tasks Completed Today: {tasks[tasks.length - 1]?.tasksCompleted}</p>
      <p>Average Mood Score: {moodScore.toFixed(2)}</p>
    </div>
  );
}
