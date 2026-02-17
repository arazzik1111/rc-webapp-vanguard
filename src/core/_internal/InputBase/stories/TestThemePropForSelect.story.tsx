import { within, expect } from "storybook/test";
import { Story } from "./_InputBase.default";

/**
 * Test: Theme Prop for Select Type
 */
export const TestThemePropForSelect: Story = {
  args: {
    theme: "grey",
    select: true,
    label: "Test theme",
  },
  play: async ({ canvasElement }) => {
    // Use within to query for the select input container element
    const canvas = within(canvasElement);
    const selectContainer = canvasElement.querySelector(".vanguard-input-grey");

    // Assert that the select input container has the class for the grey theme
    await expect(selectContainer).toBeInTheDocument();
  },
};