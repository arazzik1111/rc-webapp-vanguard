import { within, expect } from "storybook/test";
import { Story, testValues } from "./_InputBase.default";

export const ClassNameTest: Story = {
  args: {
    className: testValues.customClassName,
  },
  play: async ({ canvasElement }) => {
    // Use querySelector to find the element by its class name
    const canvas = within(canvasElement);
    const elementWithClass = canvasElement.querySelector(`.${testValues.customClassName}`);

    // Assert that the element with the class name is present in the document
    await expect(elementWithClass).toBeInTheDocument();
  },
};