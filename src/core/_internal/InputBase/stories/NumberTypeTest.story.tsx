import { within, expect } from "storybook/test";
import { Story, testTypes, selectors } from "./_InputBase.default";

export const NumberTypeTest: Story = {
  args: {
    type: testTypes.number,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvasElement.querySelector(selectors.numberInput);
    await expect(inputElement).toBeInTheDocument();
  },
};