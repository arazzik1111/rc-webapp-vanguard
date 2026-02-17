import React from "react";
import { AIOrb, AIOrbSize } from "../AIOrb";
import { within, expect } from "storybook/test";
import { Story } from "./_AIOrb.default";

export const LargeSize: Story = {
  args: {
    size: AIOrbSize.Large,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test that the component renders
    const aiOrb = canvasElement.querySelector('[class*="ai-orb"]');
    await expect(aiOrb).toBeTruthy();

    // Test that orbs containers are present
    const orbsContainers = canvasElement.querySelectorAll('[class*="orbs-container"]');
    await expect(orbsContainers.length).toBe(4);

    // Test that the size style is applied
    await expect(aiOrb).toHaveStyle({ '--container-size': '140px' });
  },
};