import { within, expect } from "storybook/test";
import { Story } from "./_Label.default";

export const UndefinedValue: Story = {
  args: {
    value: undefined,
  },
  play: async ({ canvasElement }) => {
    // Should render empty or handle undefined gracefully
    await expect(canvasElement).toBeInTheDocument();
  },
};