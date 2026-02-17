import React from "react";
import { BigLegend } from "../BigLegend";
import { within, expect } from "storybook/test";
import { IconNames } from "@vanguard/Icon/IconNames";
import { Story } from "./_BigLegend.default";

export const OutOfSeries: Story = {
  args: {
    showBadge: true,
    showPercentage: false,
    showPreviousNumber: true,
    previousNumberText: "previously",
    roundNumbers: true,
    maxWidth: "400px",
    showOutOfSeries: true,
    testId: "out-of-series-big-legend",
    bigLegendData: [
      {
        currentNumber: 75,
        previousNumber: 65,
        totalNumberSeries: ["100", "75"],
        iconName: IconNames.facebook,
        iconFillColor: "--s400",
        title: "Completed Tasks",
        description: "Tasks completed out of total assigned",
        showOutOfSeries: true,
      },
      {
        currentNumber: 42,
        previousNumber: 38,
        totalNumberSeries: ["50", "42"],
        iconName: IconNames.user,
        iconFillColor: "--p400",
        title: "Active Users",
        description: "Active users out of total registered",
        showOutOfSeries: true,
      },
      {
        currentNumber: 18,
        previousNumber: 15,
        totalNumberSeries: ["30", "18"],
        iconName: IconNames.gmb,
        iconFillColor: "--a2900",
        title: "Goals Achieved",
        description: "Goals achieved out of total set",
        showOutOfSeries: true,
      },
    ],
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that titles and descriptions are updated
    await expect(canvas.getByText("Completed Tasks")).toBeInTheDocument();
    await expect(canvas.getByText("Active Users")).toBeInTheDocument();
    await expect(canvas.getByText("Goals Achieved")).toBeInTheDocument();

    // Test that out of series text is shown
    await expect(canvas.getByText("Out of 100")).toBeInTheDocument();
    await expect(canvas.getByText("Out of 50")).toBeInTheDocument();
    await expect(canvas.getByText("Out of 30")).toBeInTheDocument();
  },
};