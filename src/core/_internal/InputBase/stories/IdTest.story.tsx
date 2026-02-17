import { within, expect } from "storybook/test";
import { Story, testValues } from "./_InputBase.default";

export const IdTest: Story = {
  args: {
    id: testValues.inputBaseId,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvasElement.querySelector(`#${testValues.inputBaseId}`);

    // Assert that the input element is present in the document
    await expect(inputElement).toBeInTheDocument();
  },
};