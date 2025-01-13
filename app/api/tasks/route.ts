import { NextResponse } from "next/server";

export async function GET() {
  const tasks = [
    { date: "2025-01-06", tasksCompleted: Math.floor(Math.random() * 10) + 1 },
    { date: "2025-01-07", tasksCompleted: Math.floor(Math.random() * 10) + 1 },
    { date: "2025-01-08", tasksCompleted: Math.floor(Math.random() * 10) + 1 },
    { date: "2025-01-09", tasksCompleted: Math.floor(Math.random() * 10) + 1 },
    { date: "2025-01-10", tasksCompleted: Math.floor(Math.random() * 10) + 1 },
    { date: "2025-01-11", tasksCompleted: Math.floor(Math.random() * 10) + 1 },
    { date: "2025-01-12", tasksCompleted: Math.floor(Math.random() * 10) + 1 },
  ];

  return NextResponse.json(tasks);
}