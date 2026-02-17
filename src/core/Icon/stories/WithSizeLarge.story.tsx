import React from "react";
import { within, expect, waitFor } from "storybook/test";
import { Story, testIcon } from "./_Icon.default";
import { IconSize } from "../Icon";

export const WithSizeLarge: Story = {
  args: {
    children: testIcon,
    type: IconSize.large,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const svg = canvas.getByRole("figure");
      expect(svg).toHaveAttribute("width", "24");
      expect(svg).toHaveAttribute("height", "24");
    });
  },
};