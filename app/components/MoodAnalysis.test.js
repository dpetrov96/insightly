import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import MoodAnalysis from "./MoodAnalysis";
import { useMood } from "./MoodProvider";

jest.mock("./MoodProvider", () => ({
  useMood: jest.fn(),
}));

describe("MoodAnalysis Component", () => {
  it("displays a balanced mood message by default", () => {
    useMood.mockReturnValue({ increasing: false, decreasing: false });
    render(<MoodAnalysis />);
    expect(screen.getByText("Your mood has been varying lately. Try finding balance! ⚖️")).toBeInTheDocument();
  });

  it("displays an improving mood message when increasing", () => {
    useMood.mockReturnValue({ increasing: true, decreasing: false });
    render(<MoodAnalysis />);
    expect(screen.getByText("Your mood has been improving over the past few days! 😊📈")).toBeInTheDocument();
  });

  it("displays a decreasing mood message when decreasing", () => {
    useMood.mockReturnValue({ increasing: false, decreasing: true });
    render(<MoodAnalysis />);
    expect(screen.getByText("It seems like you've been feeling a bit down. Hang in there! 💙🌧️")).toBeInTheDocument();
  });
});