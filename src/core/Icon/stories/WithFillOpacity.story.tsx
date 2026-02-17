import React from "react";
import { within, expect, waitFor } from "storybook/test";
import { Story, testIcon, testColors } from "./_Icon.default";

export const WithFillOpacity: Story = {
  args: {
    children: testIcon,
    hasCircle: true,
    fillColor: testColors.success,
    fillOpacity: 0.5,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const icon = canvas.getByRole("figure");
      expect(icon).toBeInTheDocument();
      // Check for rgba background with opacity on the span container
      expect(icon.parentElement).toHaveStyle({ backgroundColor: "rgba(40, 167, 69, 0.5)" });
    });
  },
};