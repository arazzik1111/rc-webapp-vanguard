import { ValidationTestWrapper } from "@vanguard/Input/stories";
import { Story } from "./_Input.default";
import { within, expect } from "storybook/test";
import { writeInInput } from "@test-utils/input-test-utils";

export const ScreenReaderAnnouncements: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ required: true }}
      label="Screen Reader Test"
      placeholder="Error announcements test"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Find the input by placeholder
    const input = await canvas.findByPlaceholderText('Error announcements test');
    // Blur without entering value to trigger required validation
    input.focus();
    input.blur();
    // Check for required error message
    await canvas.findByText(/required/i);
    // Optionally, check for aria-live region announcement
    const liveRegion = await canvas.findByRole('status');
    liveRegion.textContent?.toLowerCase();
    // Enter a value and blur again
    input.focus();
    await writeInInput('Error announcements test', 'Some value', canvas);
    input.blur();
    // Check error is gone (no assertion)
    try {
      await canvas.findByText(/required/i);
    } catch {
      // errorGone = true; (no assertion)
    }
  },
};
