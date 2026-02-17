import { Story } from "./_Textarea.default";
import { within, expect } from "storybook/test";

export const TestCounterProp: Story = {
  args: {
    counter: true,
    maxLength: 20,
    placeholder: "Counter active",
    value: "Test",
  },
  play: async ({ canvasElement }) => {
    const counter = within(canvasElement).getByText(/4\/20/);
    await expect(counter).toBeInTheDocument();
  },
};

