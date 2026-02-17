import { within, expect } from "storybook/test";
import { Story, testTypes, selectors } from "./_InputBase.default";

export const TextTypeTest: Story = {
  args: {
    type: testTypes.text,
  },
  play: async ({ canvasElement }) => {
    // Use querySelector to find the input element by its type attribute
    const canvas = within(canvasElement);
    const inputElement = canvasElement.querySelector(selectors.textInput);

    // Assert that the input element with the specified type is present in the document
    await expect(inputElement).toBeInTheDocument();
  },
};