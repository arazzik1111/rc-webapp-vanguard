import React from "react";
import { within, expect } from "storybook/test";
import { Story, testIcons } from "./_IconButton.default";

export const WithSpinning: Story = {
  args: {
    icon: testIcons.star,
    isActive: false,
    isSpinning: true,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
    // Test that spinning animation is applied (this would require checking for animation classes or styles)
  },
};