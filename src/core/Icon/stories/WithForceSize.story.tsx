import React from "react";
import { within, expect, waitFor } from "storybook/test";
import { Story, testIcon } from "./_Icon.default";

export const WithForceSize: Story = {
  args: {
    children: testIcon,
    forceSize: 32,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const svg = canvas.getByRole("figure");
      expect(svg).toHaveAttribute("width", "32");
      expect(svg).toHaveAttribute("height", "32");
    });
  },
};