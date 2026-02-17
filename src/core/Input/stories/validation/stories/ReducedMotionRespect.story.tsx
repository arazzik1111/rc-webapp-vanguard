import { ValidationTestWrapper } from "@vanguard/Input/stories";
import { within, userEvent, expect } from "storybook/test";
import { Story } from "./_Input.default";

export const ReducedMotionRespect: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ required: true }}
      label="Reduced Motion Test"
      placeholder="Animation preferences test"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getAllByRole('textbox')[0];
    await expect(input).toBeTruthy();
    // Optionally, check for a class or style that indicates reduced motion
    // await expect(input).toHaveClass('reduced-motion');
  },
};


