import { Story, testValues, testTexts } from "./_ArcGauge.default";
import { within, expect } from "storybook/test";

export const WithText: Story = {
  args: {
    value: testValues.ninety,
    text: testTexts.positive,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Test that the text is displayed
    await expect(canvas.getByText(testTexts.positive)).toBeInTheDocument();
    // Test that the component renders
    await expect(canvas.getByAltText("")).toBeInTheDocument();
  },
};