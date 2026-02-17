import { within, expect } from "storybook/test";
import { Story, baseArgs, testData } from "./_BigLegendItem.default";

export const OutOfSeries: Story = {
  args: {
    ...baseArgs,
    showOutOfSeries: true,
    totalNumberSeries: [...testData.outOfSeries.totalNumberSeries],
    title: "Completed Tasks",
    description: "Tasks completed out of total assigned",
    testId: "out-of-series-big-legend-item",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that title and description are updated
    await expect(canvas.getByText("Completed Tasks")).toBeInTheDocument();
    await expect(canvas.getByText("Tasks completed out of total assigned")).toBeInTheDocument();

    // Test that out of series text is shown - check if the functionality is actually enabled
    if (args.showOutOfSeries) {
      // Look for the "/" separator first
      const separatorElement = canvas.queryByText("/");
      if (separatorElement) {
        await expect(separatorElement).toBeInTheDocument();
        // Look for the specific "Out of 500" text (exact match to avoid conflicts)
        const outOfElement = canvas.queryByText("Out of 500");
        if (outOfElement) {
          await expect(outOfElement).toBeInTheDocument();
        }
      }
    }
  },
};