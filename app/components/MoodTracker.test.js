import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import MoodTracker from "./MoodTracker";
import { useMood } from "./MoodProvider";
import userEvent from "@testing-library/user-event";

jest.mock("./MoodProvider", () => ({
  useMood: jest.fn(),
}));

describe("MoodTracker Component", () => {
  it("renders mood tracking buttons", async () => {
    useMood.mockReturnValue({ addMood: jest.fn() });
    render(<MoodTracker />);
    expect(screen.getAllByRole("button").length).toBeGreaterThan(0);
  });

  it("calls addMood function on button click", async () => {
    const addMoodMock = jest.fn();
    useMood.mockReturnValue({ addMood: addMoodMock });
    render(<MoodTracker />);
    await userEvent.click(screen.getAllByRole("button")[0]);
    expect(addMoodMock).toHaveBeenCalledTimes(1);
  });
});