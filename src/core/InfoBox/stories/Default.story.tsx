import React from "react";
import { InfoBox } from "../InfoBox";
import { Story, testData } from "./_InfoBox.default";
import { within, expect } from "storybook/test";

export const Default: Story = {
  args: {
    description: testData.description,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(testData.description)).toBeInTheDocument();
  },
};