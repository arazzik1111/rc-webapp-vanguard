import React from "react";
import { BarChart } from "../BarChart";
import { within, expect } from "storybook/test";
import { abbreviateNumber } from "@helpers/round-number";
import { Story } from "./_BarChart.default";

export const WithCustomLegend: Story = {
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
    testId: "bar-chart-custom-legend",
    legendFormatter: (seriesName, opts) => {
      let totalGood: number = 0;
      let totalNeutral: number = 0;
      let totalBad: number = 0;
      if (seriesName == "Good") {
        totalGood += opts.w.config.series[0].data[0] + opts.w.config.series[0].data[1];
        return seriesName + `<br><span class="totalValue">${abbreviateNumber(totalGood)}</span>`;
      }
      if (seriesName == "Bad") {
        totalBad += opts.w.config.series[0].data[3] + opts.w.config.series[0].data[4];
        return seriesName + `<br><span class="totalValue">${abbreviateNumber(totalBad)}</span>`;
      } else {
        totalNeutral += opts.w.config.series[0].data[2];
        return seriesName + `<br><span class="totalValue">${abbreviateNumber(totalNeutral)}</span>`;
      }
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that the chart is rendered
    const chart = canvas.getByTestId("bar-chart-custom-legend");
    await expect(chart).toBeInTheDocument();
  },
};