import React from "react";
import { AIOrb } from "../AIOrb";
import { within, expect } from "storybook/test";
import { Story } from "./_AIOrb.default";

export const WithClassName: Story = {
  args: {
    className: "custom-ai-orb-class",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test that the component renders
    const aiOrb = canvasElement.querySelector('[class*="ai-orb"]');
    await expect(aiOrb).toBeTruthy();

    // Test that the custom class is applied
    await expect(aiOrb).toHaveClass('custom-ai-orb-class');

    // Test that orbs containers are present
    const orbsContainers = canvasElement.querySelectorAll('[class*="orbs-container"]');
    await expect(orbsContainers.length).toBe(4);
  },
};