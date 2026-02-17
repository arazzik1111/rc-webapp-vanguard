import React from "react";
import { within, expect } from "storybook/test";
import { AnimatedConditional } from "../AnimatedConditional";
import { Story, testContent } from "./_AnimatedConditional.default";

export const WithTestId: Story = {
  args: {
    children: testContent,
    condition: true,
    testId: "animated-conditional-test",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const animatedDiv = canvas.getByTestId("animated-conditional-test");
    await expect(animatedDiv).toBeInTheDocument();
  },
};