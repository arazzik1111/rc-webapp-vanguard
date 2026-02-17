import React from "react";
import { within, expect, waitFor } from "storybook/test";
import { Story, testIcon } from "./_Icon.default";

export const WithCircle: Story = {
  args: {
    children: testIcon,
    hasCircle: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const icon = canvas.getByRole("figure");
      expect(icon).toBeInTheDocument();
      // Check for circle styling - border-radius 50% on the span container
      expect(icon.parentElement).toHaveStyle({ borderRadius: "50%" });
    });
  },
};