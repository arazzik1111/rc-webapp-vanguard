import { within, expect } from "storybook/test";
import { Story, testValues, selectors } from "./_InputBase.default";

export const ValueTest: Story = {
  args: {
    value: testValues.sampleValue,
  },
  play: async ({ canvasElement }) => {
    // Use querySelector to find the input element and check its value
    const canvas = within(canvasElement);
    const inputElement = canvasElement.querySelector(selectors.inputElement);

    // Assert that the input element has the correct value
    await expect(inputElement).toHaveValue(testValues.sampleValue);
  },
};