import React from "react";
import { within, expect } from "storybook/test";
import { Story, testIcons } from "./_IconButton.default";

export const Active: Story = {
  args: {
    icon: testIcons.star,
    isActive: true,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
    // Test that active state is applied (this would require checking styles or classes)
  },
};