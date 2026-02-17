import React from "react";
import { within, expect } from "storybook/test";
import { AnimatedSwitchConditional } from "../AnimatedSwitchConditional";
import { Story, testContent } from "./_AnimatedSwitchConditional.default";

export const WithIfProp: Story = {
  args: {
    children: testContent,
    if: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Animated Content")).toBeInTheDocument();
  },
};