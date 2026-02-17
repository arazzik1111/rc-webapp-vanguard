import React from "react";
import { Story, defaultProps } from "./_HSBChart.default";
import { within, expect } from "storybook/test";

export const Default: Story = {
  args: {
    ...defaultProps,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the chart container is rendered
    const chartContainer = canvas.getByTestId("HSBChart_TestId");
    expect(chartContainer).toBeInTheDocument();

    // Check that the big legend is rendered
    const bigLegend = canvas.getByTestId("undefined_BigLegend");
    expect(bigLegend).toBeInTheDocument();
  },
};