import React from "react";
import { within, expect, userEvent } from "storybook/test";
import { Story, testIcons, createMockOnHover } from "./_IconButton.default";

export const WithOnHover: Story = {
  args: {
    icon: testIcons.star,
    isActive: false,
    onHover: createMockOnHover(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
    await userEvent.hover(button);
    await expect(args.onHover).toHaveBeenCalledWith(true);
    await userEvent.unhover(button);
    await expect(args.onHover).toHaveBeenCalledWith(false);
  },
};