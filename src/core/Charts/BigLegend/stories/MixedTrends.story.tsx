import React from "react";
import { BigLegend } from "../BigLegend";
import { within, expect } from "storybook/test";
import { IconNames } from "@vanguard/Icon/IconNames";
import { Story } from "./_BigLegend.default";

export const MixedTrends: Story = {
  args: {
    showBadge: true,
    showPercentage: false,
    showPreviousNumber: true,
    previousNumberText: "previously",
    roundNumbers: true,
    maxWidth: "400px",
    testId: "mixed-trends-big-legend",
    bigLegendData: [
      {
        currentNumber: 110,
        previousNumber: 95,
        iconName: IconNames.arrowUp,
        iconFillColor: "--s400",
        title: "Positive Trend",
        description: "Metric showing positive growth",
      },
      {
        currentNumber: 100,
        previousNumber: 100,
        iconName: IconNames.remove,
        iconFillColor: "--n400",
        title: "Neutral Trend",
        description: "Metric showing no change",
      },
      {
        currentNumber: 85,
        previousNumber: 100,
        iconName: IconNames.arrowDown,
        iconFillColor: "--d400",
        title: "Negative Trend",
        description: "Metric showing decline",
      },
    ],
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that titles and descriptions are updated
    await expect(canvas.getByText("Positive Trend")).toBeInTheDocument();
    await expect(canvas.getByText("Neutral Trend")).toBeInTheDocument();
    await expect(canvas.getByText("Negative Trend")).toBeInTheDocument();

    // Test that badges show correct trends
    await expect(canvas.getByText("+15.8%")).toBeInTheDocument();
    await expect(canvas.getByText("no change")).toBeInTheDocument();
    await expect(canvas.getByText("-15.0%")).toBeInTheDocument();
  },
};