import React from "react";
import { within, expect } from "storybook/test";
import { AnimatedSwitchConditional } from "../AnimatedSwitchConditional";
import { Story, testContent } from "./_AnimatedSwitchConditional.default";

export const WithFadeAnimation: Story = {
  args: {
    children: testContent,
    condition: true,
    animation: "fade",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Animated Content")).toBeInTheDocument();
  },
};