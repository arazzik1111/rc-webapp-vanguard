import { within, expect } from "storybook/test";
import { Story, createMockFormConfig } from "./_DateRangeInput.default";

export const Disabled: Story = {
  args: {
    formconfig: createMockFormConfig(),
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeDisabled();
  },
};