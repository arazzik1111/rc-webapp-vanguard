import React from "react";
import { within, expect } from "storybook/test";
import { AnimatedConditional } from "../AnimatedConditional";
import { Story, testContent } from "./_AnimatedConditional.default";

export const WithClassName: Story = {
  args: {
    children: testContent,
    condition: true,
    className: "custom-animated-class",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // The className is applied to the parent animated.div, not the content div
    const animatedDiv = canvas.getByText("Animated Content").parentElement;
    await expect(animatedDiv).toHaveClass("custom-animated-class");
  },
};