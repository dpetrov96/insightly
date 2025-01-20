"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchTasks } from "@/app/utils/fetchTasks";
import { Task } from "@/app/types";
import { QUERY_KEYS } from "@/app/utils/queryKeys";
import Box from "./Box";
import { useMood } from "./MoodProvider";

export default function DailyInsightsSummary() {
  const { moodScore } = useMood();
  const { data: tasksData, isLoading: tasksIsLoading } = useQuery<Task[]>({
    queryKey: [QUERY_KEYS.TASKS],
    queryFn: fetchTasks,
  });

  const tasks = tasksData || [];

  return (
    <Box isLoading={tasksIsLoading} title="Daily Insights">
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
