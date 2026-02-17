import React from "react";
import { within, expect } from "storybook/test";
import { Story, testIcons } from "./_IconButton.default";

export const Default: Story = {
  args: {
    icon: testIcons.star,
    isActive: false,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
  },
};