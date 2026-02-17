import { within, expect } from "storybook/test";
import { Story, baseArgs, testData } from "./_BigLegendItem.default";

export const NegativeChange: Story = {
  args: {
    ...baseArgs,
    ...testData.negative,
    title: "Conversions",
    description: "Total conversion rate decreased",
    testId: "negative-big-legend-item",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that negative change is shown correctly
    await expect(canvas.getByText("-13.6%")).toBeInTheDocument();

    // Test that title and description are updated
    await expect(canvas.getByText("Conversions")).toBeInTheDocument();
    await expect(canvas.getByText("Total conversion rate decreased")).toBeInTheDocument();
  },
};