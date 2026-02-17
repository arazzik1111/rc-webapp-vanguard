import { within, expect } from "storybook/test";
import { Story } from "./_InputBase.default";

export const ValueAsDefaultValueTest: Story = {
  args: {
    value: "Test value",
    valueAsDefaultValue: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvasElement.querySelector("input");

    // Assert that the input element has the correct value
    await expect(inputElement).toHaveValue("Test value");
  },
};