import React from "react";
import { within, expect } from "storybook/test";
import { AnimatedConditional } from "../AnimatedConditional";
import { Story, testContent } from "./_AnimatedConditional.default";

export const WithNoneAnimation: Story = {
  args: {
    children: testContent,
    condition: true,
    animation: "none",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Animated Content")).toBeInTheDocument();
  },
};