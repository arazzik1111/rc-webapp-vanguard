import { Story } from "./_Textarea.default";
import { within, expect } from "storybook/test";

export const TestPlaceholderProp: Story = {
  args: {
    placeholder: "Test Placeholder",
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByPlaceholderText("Test Placeholder");
    await expect(input).toBeInTheDocument();
  },
};

