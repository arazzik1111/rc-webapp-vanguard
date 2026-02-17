import React from "react";
import { within, expect, waitFor } from "storybook/test";
import { Story, testIcon } from "./_Icon.default";

export const WithSpin: Story = {
  args: {
    children: testIcon,
    spin: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const icon = canvas.getByRole("figure");
      expect(icon).toBeInTheDocument();
      // Check for spin class (CSS modules hash it)
      expect(icon.parentElement.className).toContain("spin");
    });
  },
};