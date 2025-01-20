import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import MoodHistory from "./MoodHistory";
import { useMood } from "./MoodProvider";

jest.mock("./MoodProvider", () => ({
  useMood: jest.fn(),
}));

describe("MoodHistory Component", () => {
  it("renders mood history items", () => {
    useMood.mockReturnValue({ moods: [{ date: "2024-01-01", moodScore: 3 }] });
    render(<MoodHistory />);
    expect(screen.getByText("2024-01-01")).toBeInTheDocument();
  });
});
