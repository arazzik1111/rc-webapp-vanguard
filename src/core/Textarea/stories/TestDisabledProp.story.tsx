import { Story } from "./_Textarea.default";
import { within, expect } from "storybook/test";

export const TestDisabledProp: Story = {
  args: {
    disabled: true,
    placeholder: "This is disabled",
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByPlaceholderText("This is disabled");
    await expect(input).toBeDisabled();
  },
};

