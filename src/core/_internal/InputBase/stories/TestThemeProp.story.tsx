import { within, expect } from "storybook/test";
import { Story } from "./_InputBase.default";

/**
 * Test: Theme Prop
 */
export const TestThemeProp: Story = {
  args: {
    theme: "grey",
    label: "Test theme",
  },
  play: async ({ canvasElement }) => {
    // Use within to query for the input container element
    const canvas = within(canvasElement);
    const inputContainer = canvasElement.querySelector(".vanguard-input-grey");

    // Assert that the input container has the class for the grey theme
    await expect(inputContainer).toBeInTheDocument();
  },
};