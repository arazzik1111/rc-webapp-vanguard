import { Story } from "./_Textarea.default";
import { within, expect } from "storybook/test";

export const TestAutoFocusProp: Story = {
  args: {
    autoFocus: true,
    placeholder: "Autofocus Test",
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByPlaceholderText("Autofocus Test");
    await expect(document.activeElement).toBe(input);
  },
};

