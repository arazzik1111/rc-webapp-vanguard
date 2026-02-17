import React from "react";
import { within, expect, waitFor } from "storybook/test";
import { Story, testIcon } from "./_Icon.default";

export const WithCircleSize: Story = {
  args: {
    children: testIcon,
    hasCircle: true,
    circleSize: 40,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const icon = canvas.getByRole("figure");
      expect(icon).toBeInTheDocument();
      // Check circle size on the span container
      expect(icon.parentElement).toHaveStyle({ height: "40px", width: "40px" });
    });
  },
};