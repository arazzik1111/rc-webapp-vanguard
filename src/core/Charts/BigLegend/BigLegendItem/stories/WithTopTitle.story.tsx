import { within, expect } from "storybook/test";
import { Story, baseArgs } from "./_BigLegendItem.default";

export const WithTopTitle: Story = {
  args: {
    ...baseArgs,
    topTitle: "Performance Metrics",
    testId: "top-title-big-legend-item",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that top title is shown
    await expect(canvas.getByText("Performance Metrics")).toBeInTheDocument();

    // Test that other elements are still present
    await expect(canvas.getByText("Website")).toBeInTheDocument();
    await expect(canvas.getByText("Website clicks made from our Business Profile")).toBeInTheDocument();
  },
};