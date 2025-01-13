"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchTasks } from "@/app/utils/fetchTasks";
import { fetchMoods } from "@/app/utils/fetchMoods";
import { Mood, Task } from "@/app/types";
import { QUERY_KEYS } from "@/app/utils/queryKeys";

export default function DailyInsightsSummary() {
  const { data: tasks } = useQuery<Task[]>({ queryKey: [QUERY_KEYS.TASKS], queryFn: fetchTasks });
  const { data: moods } = useQuery<Mood[]>({ queryKey: [QUERY_KEYS.MOODS], queryFn: fetchMoods });

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
