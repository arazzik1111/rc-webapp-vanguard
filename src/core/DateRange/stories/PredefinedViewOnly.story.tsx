import { within, expect } from "storybook/test";
import { Story, createMockOnChange } from "./_DateRange.default";

export const PredefinedViewOnly: Story = {
  args: {
    view: "predefined",
    onChange: createMockOnChange(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId("date-range-container");
    await expect(container).toHaveClass("date-range-view-predefined");
  },
};