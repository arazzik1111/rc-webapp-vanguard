import { Story } from "./_Textarea.default";
import { within, expect } from "storybook/test";

export const TestRequiredProp: Story = {
  args: {
    required: true,
    placeholder: "This field is required",
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByPlaceholderText("This field is required");
    await expect(input).toHaveAttribute("required");
  },
};

