import { NextResponse } from "next/server";

export async function GET() {
  const moods = [
    { date: "2025-01-06", moodScore: 3 },
    { date: "2025-01-07", moodScore: 2 },
    { date: "2025-01-08", moodScore: 1 },
    { date: "2025-01-09", moodScore: 3 },
    { date: "2025-01-10", moodScore: 2 },
    { date: "2025-01-11", moodScore: 3 },
    { date: "2025-01-12", moodScore: 2 },
  ];

  return NextResponse.json(moods);
}