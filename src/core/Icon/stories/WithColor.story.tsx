import React from "react";
import { within, expect, waitFor } from "storybook/test";
import { Story, testIcon, testColors } from "./_Icon.default";

export const WithColor: Story = {
  args: {
    children: testIcon,
    color: testColors.primary,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const icon = canvas.getByRole("figure");
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveStyle({ color: testColors.primary });
    });
  },
};