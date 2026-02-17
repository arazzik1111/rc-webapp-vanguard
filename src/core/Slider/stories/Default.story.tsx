import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story, defaultProps, selectors } from "./_Slider.default";

export const Default: Story = {
  args: {
    ...defaultProps,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that slider renders
    const slider = canvas.getByRole("slider");
    await expect(slider).toBeInTheDocument();

    // Check initial value
    await expect(slider).toHaveAttribute("aria-valuenow", "50");
  },
};