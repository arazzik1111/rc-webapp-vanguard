import React from "react";
import { BigLegend } from "../BigLegend";
import { within, expect } from "storybook/test";
import { IconNames } from "@vanguard/Icon/IconNames";
import { Story } from "./_BigLegend.default";

export const TimeDisplay: Story = {
  args: {
    showBadge: true,
    showPercentage: false,
    showPreviousNumber: true,
    previousNumberText: "previously",
    roundNumbers: true,
    maxWidth: "400px",
    isTime: true,
    testId: "time-display-big-legend",
    bigLegendData: [
      {
        currentNumber: 125,
        previousNumber: 110,
        iconName: IconNames.clock,
        iconFillColor: "--p400",
        title: "Average Session",
        description: "Average time spent on site",
      },
      {
        currentNumber: 300,
        previousNumber: 320,
        iconName: IconNames.clock,
        iconFillColor: "--s400",
        title: "Time to Complete",
        description: "Average time to complete checkout",
      },
      {
        currentNumber: 45,
        previousNumber: 60,
        iconName: IconNames.arrowUp,
        iconFillColor: "--a2900",
        title: "Response Time",
        description: "Average customer service response time",
      },
    ],
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that titles and descriptions are updated
    await expect(canvas.getByText("Average Session")).toBeInTheDocument();
    await expect(canvas.getByText("Time to Complete")).toBeInTheDocument();
    await expect(canvas.getByText("Response Time")).toBeInTheDocument();

    // Test that time is formatted correctly
    await expect(canvas.getByText("2m 5s")).toBeInTheDocument();
    await expect(canvas.getByText("5m 0s")).toBeInTheDocument();
    await expect(canvas.getByText("0m 45s")).toBeInTheDocument();
  },
};