import React from "react";
import { within, expect, waitFor } from "storybook/test";
import { Story, testIcon, testColors } from "./_Icon.default";

export const WithFill: Story = {
  args: {
    children: testIcon,
    hasCircle: true,
    fillColor: testColors.success,
    color: "#ffffff",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const icon = canvas.getByRole("figure");
      expect(icon).toBeInTheDocument();
      // Check for background color from fillColor on the span container
      expect(icon.parentElement).toHaveStyle({ backgroundColor: testColors.success });
    });
  },
};