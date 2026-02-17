import React from "react";
import { AreaChart } from "../AreaChart";
import { within, expect } from "storybook/test";
import { Story } from "./_AreaChart.default";

const mockSeries = [
  [10, 20],
  [15, 25],
  [20, 30],
  [25, 35],
  [30, 40],
];

export const Default: Story = {
  args: {
    options: {},
    series: mockSeries,
    testId: "area-chart",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that the chart is rendered
    const chart = canvas.getByTestId("area-chart");
    await expect(chart).toBeInTheDocument();
  },
};