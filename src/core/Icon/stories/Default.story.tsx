import React from "react";
import { within, expect, waitFor } from "storybook/test";
import { Story, testIcon } from "./_Icon.default";

export const Default: Story = {
  args: {
    children: testIcon,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const icon = canvas.getByRole("figure");
      expect(icon).toBeInTheDocument();
    });
  },
};