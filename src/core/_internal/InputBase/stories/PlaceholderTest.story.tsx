import { within, expect } from "storybook/test";
import { Story, testValues, selectors } from "./_InputBase.default";

export const PlaceholderTest: Story = {
  args: {
    placeholder: testValues.placeholder,
  },
  play: async ({ canvasElement }) => {
    // Use querySelector to find the input element and check its placeholder
    const canvas = within(canvasElement);
    const inputElement = canvasElement.querySelector(selectors.inputElement);

    // Assert that the input element has the correct placeholder
    await expect(inputElement).toHaveAttribute("placeholder", testValues.placeholder);
  },
};