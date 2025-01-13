import { Mood } from "../types";
import { getBaseApiUrl } from "./getBaseApiUrl";

export async function fetchMoods(): Promise<Mood[]> {
  const res = await fetch(`${getBaseApiUrl()}/api/moods`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch moods");
  }

  return res.json();
}
