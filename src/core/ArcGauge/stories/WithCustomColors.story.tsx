import { Story, testValues, testColors } from "./_ArcGauge.default";
import { within, expect } from "storybook/test";

export const WithCustomColors: Story = {
  args: {
    value: testValues.ninety,
    color1: testColors.primary,
    color2: testColors.secondary,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Test that the component renders with custom colors
    await expect(canvas.getByAltText("")).toBeInTheDocument();
  },
};