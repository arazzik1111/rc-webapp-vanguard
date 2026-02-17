import { within, expect } from "storybook/test";
import { Story, selectors } from "./_InputBase.default";

export const DisabledTest: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    // Use querySelector to find the input element and check if it is disabled
    const canvas = within(canvasElement);
    const inputElement = canvasElement.querySelector(selectors.inputElement);

    // Assert that the input element is disabled
    await expect(inputElement).toBeDisabled();
  },
};