import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story, defaultProps, selectors } from "./_Slider.default";

export const Disabled: Story = {
  args: {
    ...defaultProps,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that slider renders as disabled
    const slider = canvas.getByRole("slider");
    await expect(slider).toBeInTheDocument();

    // Check that the slider container has disabled class
    await expect(slider.closest('.MuiSlider-root')).toHaveClass('Mui-disabled');
  },
};