import React from "react";
import { within, expect, waitFor } from "storybook/test";
import { Story, testIcon } from "./_Icon.default";

export const WithStyle: Story = {
  args: {
    children: testIcon,
    style: { margin: "10px", padding: "5px" },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const icon = canvas.getByRole("figure");
      expect(icon.parentElement).toHaveStyle({ margin: "10px", padding: "5px" });
    });
  },
};