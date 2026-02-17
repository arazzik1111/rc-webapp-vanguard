import { Story, testValues } from "./_ArcGauge.default";
import { within, expect } from "storybook/test";

export const WithValueHundred: Story = {
  args: {
    value: testValues.hundred,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Test that the component renders with hundred value
    await expect(canvas.getByAltText("")).toBeInTheDocument();
  },
};