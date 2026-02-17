import { within, expect } from "storybook/test";
import { Story, baseArgs, testData, selectors } from "./_BigLegendItem.default";

export const WithCurrency: Story = {
  args: {
    ...baseArgs,
    ...testData.currency,
    formatWithCurrency: true,
    title: "Revenue",
    description: "Total revenue from online sales",
    testId: "currency-big-legend-item",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that title and description are updated
    await expect(canvas.getByText("Revenue")).toBeInTheDocument();
    await expect(canvas.getByText("Total revenue from online sales")).toBeInTheDocument();

    // Test that formatted number is displayed (exact format depends on implementation)
    const formattedNumber = canvas.getByTestId(selectors.formattedNumber);
    await expect(formattedNumber).toBeInTheDocument();
  },
};