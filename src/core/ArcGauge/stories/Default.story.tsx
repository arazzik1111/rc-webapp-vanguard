import { Story, testValues } from "./_ArcGauge.default";
import { within, expect } from "storybook/test";

export const Default: Story = {
  args: {
    value: testValues.ninety,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Test that the component renders
    await expect(canvas.getByAltText("")).toBeInTheDocument();
  },
};