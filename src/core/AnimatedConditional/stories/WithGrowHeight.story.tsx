import React from "react";
import { within, expect } from "storybook/test";
import { AnimatedConditional } from "../AnimatedConditional";
import { Story, testContent, animationConfigs } from "./_AnimatedConditional.default";

export const WithGrowHeight: Story = {
  args: {
    children: testContent,
    condition: true,
    animation: "growHeight",
    ...animationConfigs.growHeight,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Animated Content")).toBeInTheDocument();
  },
};