import React from "react";
import { within, expect, waitFor } from "storybook/test";
import { Story, testIcon, testColors } from "./_Icon.default";

export const WithFillOpacityRgba: Story = {
  args: {
    children: testIcon,
    hasCircle: true,
    fillColor: testColors.rgba,
    fillOpacity: 0.5,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const icon = canvas.getByRole("figure");
      expect(icon).toBeInTheDocument();
      // Check for rgba background with adjusted opacity
      expect(icon.parentElement).toHaveStyle({ backgroundColor: "rgba(255, 0, 0, 0.5)" });
    });
  },
};