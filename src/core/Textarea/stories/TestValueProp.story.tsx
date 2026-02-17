import { Story } from "./_Textarea.default";
import { within, expect } from "storybook/test";

export const TestValueProp: Story = {
  args: {
    value: "Initial Value",
    valueAsDefaultValue: true,
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByDisplayValue("Initial Value");
    await expect(input).toHaveValue("Initial Value");
  },
};

