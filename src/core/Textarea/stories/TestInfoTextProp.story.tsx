import { Story } from "./_Textarea.default";
import { within, expect } from "storybook/test";

export const TestInfoTextProp: Story = {
  args: {
    infoText: "This is an info text",
    placeholder: "Check info text",
  },
  play: async ({ canvasElement }) => {
    const infoText = within(canvasElement).getByText("This is an info text");
    await expect(infoText).toBeInTheDocument();
  },
};

