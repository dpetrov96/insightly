"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchTasks } from "@/app/utils/fetchTasks";
import { fetchMoods } from "@/app/utils/fetchMoods";
import { Mood, Task } from "@/app/types";
import { QUERY_KEYS } from "@/app/utils/queryKeys";
import Box from "./Box";

export default function DailyInsightsSummary() {
  const { data: tasksData, isLoading: tasksIsLoading } = useQuery<Task[]>({
    queryKey: [QUERY_KEYS.TASKS],
    queryFn: fetchTasks,
  });
  const { data: moodsData, isLoading: moodsIsLoading } = useQuery<Mood[]>({
    queryKey: [QUERY_KEYS.MOODS],
    queryFn: fetchMoods,
  });

  const moods = moodsData || [];
  const tasks = tasksData || []

  const moodScore =
    moods?.reduce((sum: number, mood) => sum + mood.moodScore, 0) / moods?.length;

  return (
    <Box isLoading={tasksIsLoading || moodsIsLoading} title="Daily Insights">
      <div className="space-y-2 mt-4">
        <p className="text-sm font-medium text-gray-700">
          Tasks Completed Today:{" "}
          <span className="text-gray-900 font-semibold">
            {tasks[tasks.length - 1]?.tasksCompleted}
          </span>
        </p>
        <p className="text-sm font-medium text-gray-700">
          Average Mood Score:{" "}
          <span className="text-gray-900 font-semibold">
            {moodScore.toFixed(2)}
          </span>
        </p>
      </div>
    </Box>
  );
}
