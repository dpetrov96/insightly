import "@testing-library/jest-dom";
import "jest-canvas-mock";

import React from "react";
import { render, screen } from "@testing-library/react";
import MoodTrends from "./MoodTrends";
import { useMood } from "./MoodProvider";

jest.mock("./MoodProvider", () => ({
  useMood: jest.fn(),
}));

describe("MoodTrends Component", () => {
  it("renders mood trends chart", () => {
    useMood.mockReturnValue({ moods: [{ date: "2024-01-01", moodScore: 5 }] });
    render(<MoodTrends />);
    expect(screen.getByText("Mood Trends")).toBeInTheDocument();
  });
});