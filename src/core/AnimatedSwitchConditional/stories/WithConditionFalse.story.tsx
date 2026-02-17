import React from "react";
import { within, expect } from "storybook/test";
import { AnimatedSwitchConditional } from "../AnimatedSwitchConditional";
import { Story, testContent } from "./_AnimatedSwitchConditional.default";

export const WithConditionFalse: Story = {
  args: {
    children: testContent,
    condition: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Wait for animation to complete
    await new Promise(resolve => setTimeout(resolve, 600));
    await expect(canvas.queryByText("Animated Content")).not.toBeInTheDocument();
  },
};