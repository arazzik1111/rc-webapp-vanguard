import { Story, testValues } from "./_ArcGauge.default";
import { within, expect } from "storybook/test";

export const WithMaskSimple: Story = {
  args: {
    value: testValues.ninety,
    mask: "simple",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Test that the component renders with simple mask
    await expect(canvas.getByAltText("")).toBeInTheDocument();
  },
};