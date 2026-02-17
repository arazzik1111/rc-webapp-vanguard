import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story, defaultProps, selectors } from "./_Slider.default";

export const ValueLabelOn: Story = {
  args: {
    ...defaultProps,
    valueLabelDisplay: "on",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that slider renders
    const sliderElement = canvas.getByRole("slider");
    await expect(sliderElement).toBeInTheDocument();

    // Check initial value
    await expect(sliderElement).toHaveAttribute("aria-valuenow", "50");
  },
};