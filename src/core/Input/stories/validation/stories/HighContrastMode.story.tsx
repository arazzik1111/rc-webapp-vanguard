import { ValidationTestWrapper } from "@vanguard/Input/stories";
import { Story } from "./_Input.default";
import { within, expect } from "storybook/test";

export const HighContrastMode: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ required: true }}
      label="High Contrast Test"
      placeholder="Visibility in high contrast"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Find the input by placeholder
    const input = await canvas.findByPlaceholderText('Visibility in high contrast');
    // Simulate focus to check for visible outline (high contrast mode)
    input.focus();
    // Blur the input
    input.blur();
  },
};
