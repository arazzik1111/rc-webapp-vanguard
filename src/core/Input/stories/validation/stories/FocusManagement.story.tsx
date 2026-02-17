import { ValidationTestWrapper } from "@vanguard/Input/stories";
import { Story } from "./_Input.default";
import { within, expect } from "storybook/test";

export const FocusManagement: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ required: true }}
      label="Focus Management"
      placeholder="Focus visibility test"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Find the input by placeholder
    const input = await canvas.findByPlaceholderText('Focus visibility test');
    // Focus the input
    input.focus();
    await expect(document.activeElement).toBe(input);
    // Blur the input
    input.blur();
    await expect(document.activeElement).not.toBe(input);
    // Check for required error after blur
    const error = await canvas.findByText(/required/i);
    await expect(error).toBeTruthy();
    // Focus again to check error remains
    input.focus();
    await expect(document.activeElement).toBe(input);
  },
};
