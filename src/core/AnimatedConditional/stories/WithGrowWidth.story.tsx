import React from "react";
import { within, expect } from "storybook/test";
import { AnimatedConditional } from "../AnimatedConditional";
import { Story, testContent, animationConfigs } from "./_AnimatedConditional.default";

export const WithGrowWidth: Story = {
  args: {
    children: testContent,
    condition: true,
    animation: "growWidth",
    ...animationConfigs.growWidth,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Animated Content")).toBeInTheDocument();
  },
};