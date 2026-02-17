import React from "react";
import { Story, defaultProps } from "./_HSBChart.default";
import { within, expect } from "storybook/test";

export const WithApexLegend: Story = {
  args: {
    ...defaultProps,
    showLegend: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the chart container is rendered
    const chartContainer = canvas.getByTestId("HSBChart_TestId");
    expect(chartContainer).toBeInTheDocument();

    // Check that ApexCharts legend is rendered (it should be in the DOM)
    // The legend is rendered by ApexCharts itself, so we check for the legend container
    const apexLegend = document.querySelector('.apexcharts-legend');
    expect(apexLegend).toBeInTheDocument();
  },
};