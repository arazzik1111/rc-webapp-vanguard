import React from "react";
import { Story, defaultProps } from "./_HSBChart.default";
import { within, expect } from "storybook/test";

export const Loading: Story = {
  args: {
    ...defaultProps,
    isLoading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the chart container is rendered
    const chartContainer = canvas.getByTestId("HSBChart_TestId");
    expect(chartContainer).toBeInTheDocument();

    // Check that loading placeholder is shown and big legend is not
    const loadingPlaceholder = canvas.getByTestId("ChartsPlaceholder_Container");
    expect(loadingPlaceholder).toBeInTheDocument();
  },
};