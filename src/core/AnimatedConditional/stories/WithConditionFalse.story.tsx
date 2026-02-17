import React from "react";
import { within, expect } from "storybook/test";
import { AnimatedConditional } from "../AnimatedConditional";
import { Story, testContent } from "./_AnimatedConditional.default";

export const WithConditionFalse: Story = {
  args: {
    children: testContent,
    condition: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Wait for animation to complete (500ms + buffer)
    await new Promise(resolve => setTimeout(resolve, 600));
    // When condition is false, content should not be visible after animation
    await expect(canvas.queryByText("Animated Content")).not.toBeInTheDocument();
  },
};