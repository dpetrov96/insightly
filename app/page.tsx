import { QueryClient, dehydrate } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";

import { fetchTasks } from "@/app/utils/fetchTasks";
import { fetchMoods } from "@/app/utils/fetchMoods";

import DailyInsightsSummary from "@/app/components/DailyInsightsSummary";
import MoodTracker from "@/app/components/MoodTracker";
import MoodAnalysis from "@/app/components//MoodAnalysis";
import MoodTrends from "@/app/components/MoodTrends";

export default async function Page() {
  const queryClient = new QueryClient();
  const dehydratedState = dehydrate(queryClient);

  const tasks = await fetchTasks();
  const moods = await fetchMoods();

  queryClient.setQueryData(["tasks"], tasks);
  queryClient.setQueryData(["moods"], moods);

  return (
    <HydrationBoundary state={dehydratedState}>
      <DailyInsightsSummary />
      <MoodTracker />
      <MoodAnalysis />
      <MoodTrends />
    </HydrationBoundary>
  );
}
