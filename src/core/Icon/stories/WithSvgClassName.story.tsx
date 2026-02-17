import React from "react";
import { within, expect, waitFor } from "storybook/test";
import { Story, testIcon } from "./_Icon.default";

export const WithSvgClassName: Story = {
  args: {
    children: testIcon,
    svgClassName: "custom-svg-class",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const svg = canvas.getByRole("figure");
      expect(svg).toHaveClass("custom-svg-class");
    });
  },
};