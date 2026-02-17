import React from "react";
import { within, expect, userEvent } from "storybook/test";
import { Story, testIcons, testMessages } from "./_IconButton.default";

export const WithTooltip: Story = {
  args: {
    icon: testIcons.star,
    isActive: true,
    message: testMessages.tooltip,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
    // Hover to show tooltip
    await userEvent.hover(button);
    // Note: Tooltip testing might require additional setup depending on Popover implementation
  },
};