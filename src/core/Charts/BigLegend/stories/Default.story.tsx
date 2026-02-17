import React from "react";
import { BigLegend } from "../BigLegend";
import { within, expect } from "storybook/test";
import { IconNames } from "@vanguard/Icon/IconNames";
import { Story } from "./_BigLegend.default";

export const Default: Story = {
  args: {
    showBadge: true,
    showPercentage: false,
    showPreviousNumber: true,
    previousNumberText: "previously",
    roundNumbers: true,
    maxWidth: "400px",
    testId: "default-big-legend",
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
  render: (args) => (
    <div style={{ width: "100%" }}>
      <BigLegend {...args} />
    </div>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that all items are rendered
    await expect(canvas.getByText("Website")).toBeInTheDocument();
    await expect(canvas.getByText("Directions")).toBeInTheDocument();
    await expect(canvas.getByText("Calls")).toBeInTheDocument();

    // Test that descriptions are rendered
    await expect(canvas.getByText("Website clicks made from our Business Profile")).toBeInTheDocument();
    await expect(canvas.getByText("Direction requests made from your Business Profile")).toBeInTheDocument();
    await expect(canvas.getByText("Calls made from your Business Profile")).toBeInTheDocument();

    // Test that numbers are rendered
    await expect(canvas.getByText("110")).toBeInTheDocument();
    await expect(canvas.getByText("26K")).toBeInTheDocument();
    await expect(canvas.getByText("28.7K")).toBeInTheDocument();

    // Test that badges are rendered
    await expect(canvas.getByText("+4.8%")).toBeInTheDocument();
    await expect(canvas.getByText("+4.0%")).toBeInTheDocument();
    await expect(canvas.getByText("-1.0%")).toBeInTheDocument();
  },
};