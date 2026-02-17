import { ValidationTestWrapper } from "@vanguard/Input/stories";
import { Story } from "./_Input.default";
import { within, expect } from "storybook/test";

export const AriaLabels: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ required: true }}
      label="Required Field"
      placeholder="ARIA labels test"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Find the input by placeholder
    const input = await canvas.findByPlaceholderText('ARIA labels test');
    // Check aria-required
    await expect(input.getAttribute('aria-required')).toBe('true');
    // Simulate blur to trigger validation
    input.focus();
    input.blur();
    // Check for error message (assuming it appears after blur)
    const error = await canvas.findByText(/required/i);
    await expect(error).toBeTruthy();
  },
};
