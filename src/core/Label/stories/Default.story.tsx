import { within, expect } from "storybook/test";
import { Story } from "./_Label.default";

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Default Label");
    await expect(label).toBeInTheDocument();
  },
};