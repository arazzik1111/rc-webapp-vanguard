import { within, expect } from "storybook/test";
import { Story } from "./_InputBase.default";

export const AutoFocusTest: Story = {
  args: {
    autoFocus: true,
  },
  play: async ({ canvasElement }) => {
    // Use within to find all input elements with the role "textbox"
    const canvas = within(canvasElement);
    const inputElements = canvas.getAllByRole("textbox");

    // Use a filter or other criteria to select the specific input element you want to test
    const inputElement = inputElements[1]; // Adjust the index or add filtering logic if needed
    // Assert that the input element is focused
    await expect(document.activeElement).toBe(inputElement);
  },
};