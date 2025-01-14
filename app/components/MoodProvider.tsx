"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Mood } from "@/app/types";

interface MoodContextType {
  moods: Mood[];
  addMood: (moodScore: number) => void;
}

const MoodContext = createContext<MoodContextType | undefined>(undefined);

export const MoodProvider = ({ children }: { children: ReactNode }) => {
  const [moods, setMoods] = useState<Mood[]>([]);

  const addMood = (moodScore: number) => {
    const today = new Date().toISOString().replace("T", " ").split(".")[0];
    setMoods((prevMoods) => [...prevMoods, { date: today, moodScore }]);
  };

  return (
    <MoodContext.Provider value={{ moods, addMood }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => {
  const context = useContext(MoodContext);
  if (!context) {
    throw new Error("useMood must be used within a MoodProvider");
  }
  return context;
};
