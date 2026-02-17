import React from "react";
import { InfoBox } from "../InfoBox";
import { Story, testData, selectors } from "./_InfoBox.default";
import { within, expect } from "storybook/test";

export const Info: Story = {
  args: {
    type: "info",
    title: testData.title,
    description: testData.description,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(testData.title)).toBeInTheDocument();
    await expect(canvas.getByText(testData.description)).toBeInTheDocument();
  },
};