import { within, expect } from "storybook/test";
import { Story, testValues, selectors } from "./_InputBase.default";

export const DefaultValueTest: Story = {
  args: {
    defaultValue: testValues.defaultValue,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvasElement.querySelector(selectors.inputElement);

    // Assert that the input element has the correct value
    await expect(inputElement).toHaveValue(testValues.defaultValue);
  },
};