import React from "react";
import { within, expect } from "storybook/test";
import { AnimatedSwitchConditional } from "../AnimatedSwitchConditional";
import { Story, testContent } from "./_AnimatedSwitchConditional.default";

export const WithClassName: Story = {
  args: {
    children: testContent,
    condition: true,
    className: "custom-animated-class",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const animatedDiv = canvas.getByText("Animated Content").parentElement;
    await expect(animatedDiv).toHaveClass("custom-animated-class");
  },
};