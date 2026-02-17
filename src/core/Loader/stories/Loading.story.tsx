import React from "react";
import { within, expect } from "storybook/test";
import { Story, testIds } from "./_Loader.default";

export const Loading: Story = {
  args: {
    loading: true,
    testId: testIds.loader,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loader = canvas.getByTestId(testIds.loader);
    await expect(loader).toBeInTheDocument();
  },
};