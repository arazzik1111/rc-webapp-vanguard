import { within, expect } from "storybook/test";
import { Story, createMockFormConfig } from "./_DateRangeInput.default";

export const Default: Story = {
  args: {
    formconfig: createMockFormConfig(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
  },
};