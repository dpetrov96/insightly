"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Mood } from "@/app/types";

interface MoodContextType {
  moods: Mood[];
  addMood: (moodScore: number) => void;
}

const MoodContext = createContext<MoodContextType | undefined>(undefined);

export const MoodProvider = ({ children }: { children: ReactNode }) => {
  const [moods, setMoods] = useState<Mood[]>([]);

  // Load moods from localStorage on initial render
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedMoods = localStorage.getItem("moods");
      if (storedMoods) {
        setMoods(JSON.parse(storedMoods));
      }
    }
  }, []);

  // Save moods to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("moods", JSON.stringify(moods));
    }
  }, [moods]);

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