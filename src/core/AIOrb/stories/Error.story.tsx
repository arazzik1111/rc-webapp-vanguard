import React from "react";
import { AIOrb, AIOrbStatus } from "../AIOrb";
import { within, expect } from "storybook/test";
import { Story } from "./_AIOrb.default";

export const Error: Story = {
  args: {
    state: AIOrbStatus.Error,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test that the component renders
    const aiOrb = canvasElement.querySelector('[class*="ai-orb"]');
    await expect(aiOrb).toBeTruthy();

    // Test that orbs containers are present
    const orbsContainers = canvasElement.querySelectorAll('[class*="orbs-container"]');
    await expect(orbsContainers.length).toBe(4);
  },
};