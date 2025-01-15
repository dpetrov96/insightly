import { QueryClient, dehydrate } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";

import { fetchTasks } from "@/app/utils/fetchTasks";
import { fetchMoods } from "@/app/utils/fetchMoods";
import { QUERY_KEYS } from "@/app/utils/queryKeys";

import DailyInsightsSummary from "@/app/components/DailyInsightsSummary";
import MoodTracker from "@/app/components/MoodTracker";
import MoodAnalysis from "@/app/components//MoodAnalysis";
import MoodTrends from "@/app/components/MoodTrends";
import MoodHistory from "./components/MoodHistory";

export default async function Page() {
  const queryClient = new QueryClient();
  const dehydratedState = dehydrate(queryClient);

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.TASKS],
    queryFn: fetchTasks,
  });

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.MOODS],
    queryFn: fetchMoods,
  });

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <DailyInsightsSummary />
        <MoodAnalysis />
        <MoodTracker />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <MoodTrends />
        <MoodHistory />
      </div>
    </HydrationBoundary>
  );
}
