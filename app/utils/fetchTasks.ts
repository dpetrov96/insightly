import { Task } from "../types";
import { getBaseApiUrl } from "./getBaseApiUrl";

export async function fetchTasks(): Promise<Task[]> {
  const res = await fetch(`${getBaseApiUrl()}/api/tasks`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return res.json();
}
