import { within, expect } from "storybook/test";
import { Story, testTypes, selectors } from "./_InputBase.default";

export const PasswordTypeTest: Story = {
  args: {
    type: testTypes.password,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvasElement.querySelector(selectors.passwordInput);
    await expect(inputElement).toBeInTheDocument();
  },
};