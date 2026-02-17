import { within, expect } from "storybook/test";
import { Story } from "./_DateRange.default";

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId("date-range-container");
    await expect(container).toBeInTheDocument();
  },
};