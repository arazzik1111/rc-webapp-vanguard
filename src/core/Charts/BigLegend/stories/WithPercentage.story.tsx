import React from "react";
import { BigLegend } from "../BigLegend";
import { within, expect } from "storybook/test";
import { IconNames } from "@vanguard/Icon/IconNames";
import { Story } from "./_BigLegend.default";

export const WithPercentage: Story = {
  args: {
    showBadge: false,
    showPercentage: true,
    showPreviousNumber: true,
    previousNumberText: "previously",
    roundNumbers: true,
    maxWidth: "400px",
    testId: "percentage-big-legend",
    bigLegendData: [
      {
        currentNumber: 110,
        previousNumber: 105,
        iconName: IconNames.notification,
        iconFillColor: "--p400",
        title: "Website",
        description: "Website clicks made from our Business Profile",
      },
      {
        currentNumber: 26000,
        previousNumber: 25000,
        iconName: IconNames.upload,
        iconFillColor: "--s400",
        title: "Directions",
        description: "Direction requests made from your Business Profile",
      },
      {
        currentNumber: 28700,
        previousNumber: 29000,
        iconName: IconNames.phone,
        iconFillColor: "--a2900",
        title: "Calls",
        description: "Calls made from your Business Profile",
      },
    ],
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that percentages are shown
    await expect(canvas.getByText("4.8%")).toBeInTheDocument();
    await expect(canvas.getByText("4.0%")).toBeInTheDocument();
    await expect(canvas.getByText("1.0%")).toBeInTheDocument();

    // Test that badges are not shown
    const badgeElement = canvas.queryByText("+4.8%");
    await expect(badgeElement).toBeNull();
  },
};