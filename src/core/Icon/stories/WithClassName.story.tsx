import React from "react";
import { within, expect, waitFor } from "storybook/test";
import { Story, testIcon } from "./_Icon.default";

export const WithClassName: Story = {
  args: {
    children: testIcon,
    className: "custom-icon-class",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const icon = canvas.getByRole("figure");
      expect(icon.parentElement).toHaveClass("custom-icon-class");
    });
  },
};