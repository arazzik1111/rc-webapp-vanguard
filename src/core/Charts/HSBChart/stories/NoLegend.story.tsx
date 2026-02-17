import React from "react";
import { Story, defaultProps } from "./_HSBChart.default";
import { within, expect } from "storybook/test";

export const NoLegend: Story = {
  args: {
    ...defaultProps,
    showBigLegend: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the chart container is rendered
    const chartContainer = canvas.getByTestId("HSBChart_TestId");
    expect(chartContainer).toBeInTheDocument();

    // Check that big legend is not rendered
    const bigLegend = canvas.queryByTestId("HSBChart_TestId_BigLegend");
    expect(bigLegend).not.toBeInTheDocument();
  },
};