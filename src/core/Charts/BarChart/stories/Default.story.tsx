import React from "react";
import { BarChart } from "../BarChart";
import { within, expect } from "storybook/test";
import { Story } from "./_BarChart.default";

export const Default: Story = {
  args: {
    series: [
      {
        name: "",
        data: [800, 430, 548, 470, 540],
      },
    ],
    categories: ["5 stars", "4 stars", "3 stars", "2 stars", "1 stars"],
    colors: ["var(--s400)", "var(--s400)", "var(--a2900)", "var(--e500)", "var(--e500)"],
    showLegend: true,
    chartTitle: "Total number of reviews",
    customLegendItems: ["Good", "Neutral", "Bad"],
    legendFillColors: ["var(--s400)", "var(--a2900)", "var(--e500)"],
    height: "250px",
    testId: "bar-chart",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that the chart is rendered
    const chart = canvas.getByTestId("bar-chart");
    await expect(chart).toBeInTheDocument();
  },
};