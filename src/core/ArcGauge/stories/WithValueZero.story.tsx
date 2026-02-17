import { Story, testValues } from "./_ArcGauge.default";
import { within, expect } from "storybook/test";

export const WithValueZero: Story = {
  args: {
    value: testValues.zero,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Test that the component renders with zero value
    await expect(canvas.getByAltText("")).toBeInTheDocument();
  },
};